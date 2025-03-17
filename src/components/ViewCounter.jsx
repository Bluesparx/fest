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
    <div className="absolute bottom-6 right-6 flex items-center gap-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-2 rounded-xl shadow-xl animate-fadeIn">
      <Eye size={25} className="text-white" />
      <span className="text-xl ">Total Visits:</span><span className="text-xl font-bold"> {views}</span>
    </div>
  );
};

export default ViewCounter;
