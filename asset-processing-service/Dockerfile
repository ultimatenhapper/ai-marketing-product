FROM python:3.12-slim

#  Set the working directory in the container
WORKDIR /app

# Copy the dependencies file to the working directory
COPY pyproject.toml poetry.lock /app/

# Install poetry
RUN pip install poetry

# Install the dependencies
RUN poetry install --no-cache --no-interaction --no-root

# Copy the rest of the application code to the working directory

COPY . /app

# Run the service when the container launches
CMD ["poetry", "run", "asset-processing-service"]
 