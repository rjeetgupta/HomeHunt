import User from "../models/User.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";


// Generate access token and refresh token

const generateAccessTokenRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);

        if(!user) {
            throw new ApiError(400, "User not found")
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;

        await user.save({ validateBeforeSave: false });
        
        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access token and refresh token")
    }
}

// Options

const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000
}


// register user
const registerUser = asyncHandler(async (req, res) => { 
    const { name, email, password } = req.body

    const existedUser = await User.findOne({ email });

    if (existedUser) {
        throw new ApiError(400, "User already exists")
    }

    const user = await User.create({
        name,
        email,
        password
    })

    const createdUser = await User.findById(user._id).select("-password")

    if(!createdUser) {
        throw new ApiError(400, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(
            200,
            createdUser,
            "User created successfully"
        )
    )
});


// login user

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email });

    if (!user) {
        throw new ApiError(400, "User not found")
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch) {
        throw new ApiError(400, "Password is incorrect")
    }

    // generate access token and refresh token
    const { accessToken, refreshToken } = await generateAccessTokenRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged in successfully"
        )
    )

});


// logout user

const logoutUser = asyncHandler(async (req, res) => {
    console.log(req.user)
    const userId = req.user._id
    const user = await User.findByIdAndUpdate(
        userId,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    );

    if(!user) {
        throw new ApiError(400, "User not found")
    }
    
    res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(
        new ApiResponse(
            200,
            null,
            "User logged out successfully"
        )
    )
 });


export { registerUser, loginUser, logoutUser };