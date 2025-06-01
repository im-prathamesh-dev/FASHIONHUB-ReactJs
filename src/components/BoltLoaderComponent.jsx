import { BoltLoader } from "react-awesome-loaders";

export const BoltLoaderComponent = () => {
  return (
    <div className="loader-wrapper">
      <BoltLoader
        className="loaderbolt"
        boltColor="#6366F1"             // Indigo
        backgroundBlurColor="#E0E7FF"  // Light Indigo background
      />
    </div>
  );
};
