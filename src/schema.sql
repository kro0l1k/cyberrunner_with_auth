CREATE TABLE questionnaire_responses (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    experience TEXT NOT NULL,
    city VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster email searches
CREATE INDEX idx_questionnaire_email ON questionnaire_responses(email);

-- Add proper permissions
GRANT SELECT, INSERT ON questionnaire_responses TO your_app_user;
GRANT USAGE, SELECT ON questionnaire_responses_id_seq TO your_app_user;
