import { Link, useLoaderData } from "react-router-dom"
import Button from "../components/Button";

const AllItems = () => {
  const items = useLoaderData();
  
  console.log(items)
  
  return (
    <div className='text-center'>
      <h2
        data-aos='zoom-in'
        data-aos-duration='2000'
        className='text-3xl md:text-4xl lg:text-5xl font-bold mt-4'
      >
        All Art & Craft Items
        <div className='overflow-x-auto md:w-3/4 mx-auto px-4 lg:px-0 pt-6'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr className='border-b-2 border-b-warm-coral text-lg text-warm-coral'>
                <th></th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr className='border-b-2 border-b-warm-coral' key={item._id}>
                  <th>1</th>
                  <td>{item.item_name}</td>
                  <td>$ {item.price}</td>
                  <td>{item.stockStatus}</td>
                  <td>
                    <Link to={`/items/${item._id}`}>
                      <Button type={'secondary'} label={'View Details'} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </h2>
    </div>
  );
}
export default AllItems