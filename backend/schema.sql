CREATE DATABASE nba_dashboard;

USE nba_dashboard;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    bio TEXT
);

CREATE TABLE friendships (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    friend_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (friend_id) REFERENCES users(id)
);

CREATE TABLE teams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    city VARCHAR(100),
    conference VARCHAR(50),
    division VARCHAR(50)
);

CREATE TABLE players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    team_id INT,
    position VARCHAR(50),
    height VARCHAR(20),
    weight INT,
    FOREIGN KEY (team_id) REFERENCES teams(id)
);

CREATE TABLE groups (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    creator_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (creator_id) REFERENCES users(id)
);

CREATE TABLE group_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    user_id INT,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (group_id) REFERENCES groups(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE player_stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id INT,
    season YEAR,
    team_id INT,
    games_played INT,
    points_per_game FLOAT,
    rebounds_per_game FLOAT,
    assists_per_game FLOAT,
    steals_per_game FLOAT,
    blocks_per_game FLOAT,
    turnovers_per_game FLOAT,
    field_goal_pct FLOAT,
    three_point_pct FLOAT,
    free_throw_pct FLOAT,
    minutes_per_game FLOAT,
    FOREIGN KEY (player_id) REFERENCES players(id),
    FOREIGN KEY (team_id) REFERENCES teams(id)
);

CREATE TABLE mvp_predictions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    input_stats JSON,
    predicted_score FLOAT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE similar_players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id INT,
    similar_player_id INT,
    similarity_score FLOAT,
    explanation TEXT,
    FOREIGN KEY (player_id) REFERENCES players(id),
    FOREIGN KEY (similar_player_id) REFERENCES players(id)
);

