import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const ItemDataCard = ({ data, HandleDelete, setEditItem }) => {
  return (
    <figure className="flex flex-col shadow-xl rounded-md bg-white overflow-hidden border p-5">
      <button
        className="relative top-0 self-end"
        onClick={() => HandleDelete(data.Item)}
      >
        <ImCross />
      </button>
      <table className="table-auto my-2  border-collapse border border-slate-500">
        <tbody>
          <tr>
            <td className="p-2 border border-slate-600">
              <p className="text-[15px]">Item</p>
            </td>
            <td className="p-2 border border-slate-600">
              <p className="text-[15px]">{data.Item}</p>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-slate-600">
              <p className="text-[15px]">Amount </p>
            </td>
            <td className="p-2 border border-slate-600">
              <p className="text-[15px]">{data.Amount}</p>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-slate-600">
              <p className="text-[15px]">Unit </p>
            </td>
            <td className="p-2 border border-slate-600">
              <p className="text-[15px]">{data.Unit}</p>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-slate-600">
              <p className="text-[15px]">Height</p>
            </td>
            <td className="p-2 border border-slate-600">
              <p className="text-[15px]">{data.height}</p>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-slate-600">
              <p className="text-[15px]">Width</p>
            </td>
            <td className="p-2 border border-slate-600">
              <p className="text-[15px]">{data.width}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => setEditItem(data)}
        className="btn-md w-full flex items-center justify-center"
      >
        <FaEdit size={18} className="mr-2" /> Edit
      </button>
    </figure>
  );
};

export default ItemDataCard;
