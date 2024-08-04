import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { useEffect, useState } from "react";

const MyList = () => {
  const { user } = useAuth();
  const items = useLoaderData();
  console.log(items);
  const [myItems, setMyItems] = useState([]);
 
useEffect(() => {
  if (user && items) {
    const loadedItems = items.filter((item) => item.user_email === user.email);
    setMyItems(loadedItems);
  }
}, [user, items]);
 
    return <div>
      
      {myItems.map(item => <div key={item._id}></div>
      )}
    </div>;
  
  
 
}
export default MyList

