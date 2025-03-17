import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const ViewCounter = () => {
  const [views, setViews] = useState(0);
  const viewDocRef = doc(db, "stats", "globalViews");

  useEffect(() => {
    const incrementViews = async () => {
      try {
        const docSnap = await getDoc(viewDocRef);

        if (docSnap.exists()) {
          const currentCount = docSnap.data().count || 0;
          setViews(currentCount + 1);
          await updateDoc(viewDocRef, { count: currentCount + 1 });
        } else {
          await setDoc(viewDocRef, { count: 1 });
          setViews(1);
        }
      } catch (error) {
        console.error("Error updating view count:", error);
      }
    };

    incrementViews();
  }, []);

  return (
    <div className="absolute bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
      Total Views: {views}
    </div>
  );
};

export default ViewCounter;
