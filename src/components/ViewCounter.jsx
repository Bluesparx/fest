import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { Eye } from "lucide-react";

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
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-lg animate-fadeIn">
    <Eye size={16} className="text-white sm:size-10" />
    <span className="text-sm sm:text-base">Total Visits:</span>
    <span className="text-sm sm:text-base font-bold">{views}</span>
  </div>
  
  );
};

export default ViewCounter;
