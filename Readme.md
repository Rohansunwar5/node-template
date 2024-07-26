API endpoints

# user registration

http://localhost:8000/api/v1/registration
{name, email, password}

# user activation

http://localhost:8000/api/v1/activate-user
{activation_code, actiavtion_token}

# user login

http://localhost:8000/api/v1/login
{email, password}

# user logout

http://localhost:8000/api/v1/login

# refresh token

http://localhost:8000/api/v1/refreshToken

# Logged in users session

http://localhost:8000/api/v1/logged-in-users
