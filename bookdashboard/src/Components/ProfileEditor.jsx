// ProfileEditor.jsx
import React, { useState } from 'react';
import '../App.css';

const ProfileEditor = () => {
  const [profile, setProfile] = useState({
    name: 'Abeera',
    age: 22
  });

  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [tempProfile, setTempProfile] = useState({ ...profile }); // Temporary profile for editing

  // Start editing: Copy the current profile into tempProfile
  const startEditing = () => {
    setIsEditing(true);
    setTempProfile({ ...profile });
  };

  // Save edited profile
  const saveProfile = () => {
    setProfile({ ...tempProfile }); // Update the main profile state
    setIsEditing(false); // Exit editing mode
  };

  // Cancel editing (restore the original profile)
  const cancelEditing = () => {
    setIsEditing(false);
    setTempProfile({ ...profile }); // Reset to the original profile values
  };

  return (
    <div className="profile-container">
      <h2>Profile Editor</h2>
      {!isEditing ? (
        <>
          <p>Name: {profile.name}</p>
          <p>Age: {profile.age}</p>
          <button onClick={startEditing}>Edit Profile</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={tempProfile.name}
            onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
            placeholder="Enter name"
          />
          <input
            type="number"
            value={tempProfile.age}
            onChange={(e) => setTempProfile({ ...tempProfile, age: e.target.value })}
            placeholder="Enter age"
          />
          <div className="btn-group">
            <button onClick={saveProfile}>Confirm</button>
            <button onClick={cancelEditing}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileEditor;
