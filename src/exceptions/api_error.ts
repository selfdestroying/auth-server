class ApiError extends Error {
	status: number
	errors: []
	constructor(status: number, message: string, errors: [] = []) {
		super(message)
		this.status = status
		this.errors = errors
	}

	static BadRequest(message: string, errors: [] = []) {
		return new ApiError(400, message, errors)
	}

	static UnauthorizedError() {
		return new ApiError(401, 'Unauthorized')
	}
}

export default ApiError
