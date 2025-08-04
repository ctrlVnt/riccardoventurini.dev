import React from 'react';

const AddressKeeperPolicy: React.FC = () => {
  return (
    <div className="p-6 bg-white max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        Address Keeper is a fully offline application. Your privacy is important, and we want to be transparent about how the app works and what data it handles.
      </p>

      <h2 className="text-xl font-semibold mb-2">Personal Data</h2>
      <p className="mb-4">
        The app does not collect, store, or transmit any personal data. All information you enter stays only on your device.
      </p>

      <h2 className="text-xl font-semibold mb-2">Gallery Access</h2>
      <p className="mb-4">
        Address Keeper requests access to your gallery only to let you select an image to associate with a contact or address. It does not access other photos or transmit the selected image anywhere.
      </p>

      <h2 className="text-xl font-semibold mb-2">Offline Functionality</h2>
      <p className="mb-4">
        The app works entirely offline and does not require an internet connection. No data is sent to external servers.
      </p>

      <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
      <p className="mb-4">
        Any future updates to this privacy policy will be included in this section within the app.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Last updated: August 4, 2025
      </p>
    </div>
  );
};

export default AddressKeeperPolicy;
