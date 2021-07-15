const getOrThrowIfNotFound = (name: string): string => {
  const variable = process.env[name];
  if (variable == null) {
    throw new Error(`Environment variable ${name} not found`);
  }
  return variable.toString();
};

interface EnvironmentVariable {
  PLACEHOLDER_VAR: string;
}

export const wrappedProcessEnv: EnvironmentVariable = {
  PLACEHOLDER_VAR: getOrThrowIfNotFound('PLACEHOLDER_VAR'),
};
