/**
 * Module for initializing environment variables
 * @remark If the value of even one variable is not found,
 * the application will immediately throw an error upon module initialization
 * @module
 */

/**
 * Retrieving an environment variable
 * @throwable
 */

const getEnvVar = (key: string) => {
    if (process.env[key] === undefined) {
        throw new Error(`Env variable ${key} is required`);
    }
    return process.env[key] || '';
};

/** API entrypoint */
export const API_URL = getEnvVar('BLOG_API_URL');

/** Application run mode */
export const NODE_ENV = getEnvVar('NODE_ENV');
/** Development mode */
export const isDevEnv = NODE_ENV === 'development';
/** Production mode */
export const isProdEnv = NODE_ENV === 'production';
