package com.ibm.exception;

public class InvalidFlightException extends Exception {
	public InvalidFlightException() {
	}

	public InvalidFlightException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public InvalidFlightException(String message, Throwable cause) {
		super(message, cause);
	}

	public InvalidFlightException(String message) {
		super(message);
	}

	public InvalidFlightException(Throwable cause) {
		super(cause);
	}

}
