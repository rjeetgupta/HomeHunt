// Health check controller
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";


const healthCheck = asyncHandler(async (req, res) => {
    res.status(200).json(new ApiResponse(200, "Success"));
});

export { healthCheck }