import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserNameCreation.css';
import { supabase } from '../lib/supabaseClient';


export default function UserNameCreation() {
  const [username, setUsername] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const scriptLines = [
    "Welcome to the NBA Dashboard.",
    "Here, you can build MVPs, discover player similarities, and more.",
    "Before you log onto your dashboard...",
    "...choose a username for your page."
  ];

  useEffect(() => {
    if (currentLine < scriptLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 4000);
      return () => clearTimeout(timer);
    } else if (currentLine === scriptLines.length - 1) {
      const timer = setTimeout(() => {
        setShowInput(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username) {
            setError('Please enter a username');
            return;
        }

        const {
            data: { user },
            error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
            setError('Unable to get current user');
            return;
        }

        // Update the username in your 'users' table
        const { error: updateError } = await supabase
            .from('users')
            .update({ username })
            .eq('auth_id', user.id);

        if (updateError) {
            console.error('Error updating username:', updateError);
            setError('Failed to set username. Try again.');
            return;
        }

        // Update the user's auth metadata to include the username/display_name
        const { error: metadataError } = await supabase.auth.updateUser({
            data: { display_name: username, username }, // you can pick one or both keys
        });

        if (metadataError) {
            console.error('Error updating user metadata:', metadataError);
            setError('Failed to update user profile metadata.');
            return;
        }

        // If all went well, show welcome message then navigate
        setShowWelcome(true);
        setTimeout(() => navigate('/dashboard'), 3000);
    };


  return (
    <div className="username-page">
  {showWelcome ? (
    <h1 className="fade-text">Welcome to NBA Dashboard @{username}!</h1>
  ) : !showInput ? (
    <h1 key={currentLine} className="fade-text">
      {scriptLines[currentLine]}
    </h1>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="user-signup">
        <h1 className="username-text">Username:</h1>
        <input
          className="username-input"
          placeholder="Enter username..."
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">&rarr;</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </form>
  )}
</div>

  );
}
