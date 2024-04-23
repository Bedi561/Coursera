import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { TbList } from "react-icons/tb";

const ItemBHK = ({ setRequestData, requestData, editItem, HandleDelete }) => {
  const [Item, setItem] = useState("");
  const [Amount, setAmount] = useState("");
  const [Unit, setUnit] = useState("");
  const [Height, setHeight] = useState("");
  const [Width, setWidth] = useState("");
  const [error, setError] = useState(null);

  const AddingData = () => {
    setError("");
    if (
      Item == "" ||
      Amount == "" ||
      Unit == "" ||
      Height == "" ||
      Width == ""
    ) {
      setError("Please Fill all the fields");
      return;
    }

    // Check the item name is already present or not
    const check = requestData.filter((data) => data.Item === Item);
    if (check.length !== 0) {
      setError("Item name is Duplicate");
      return;
    }

    const Modular_kitchen_part = {
      Item,
      Amount,
      Unit,
      height: Height,
      width: Width,
    };

    const updatedData = requestData ? [...requestData, Modular_kitchen_part] : [Modular_kitchen_part];

  // Set the updated data array to the state
  setRequestData(updatedData);

    setAmount("");
    setHeight("");
    setWidth("");
    setUnit("");
    setItem("");
  };

  useEffect(() => {
    if (editItem !== null) {
      setItem(editItem.Item);
      setAmount(editItem.Amount);
      setHeight(editItem.height);
      setUnit(editItem.Unit);
      setWidth(editItem.width);
      HandleDelete(editItem.Item);
    }
  }, [editItem]);

  return (
    <div className="flex flex-col my-5 bg-white p-5 shadow-lg rounded-lg">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
        <div className="flex flex-col">
          <label htmlFor="name" class="input-label">
            Item
          </label>
          <input
            type="text"
            value={Item}
            onChange={(e) => setItem(e.target.value)}
            className="input-md"
            placeholder="Enter Item"
            required
          />
          <span className="input-error"></span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" class="input-label">
            Amount
          </label>
          <input
            type="text"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-md"
            placeholder="Enter Amount"
            required
          />
          <span className="input-error"></span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" class="input-label">
            Unit
          </label>
          <input
            type="text"
            name="name"
            value={Unit}
            onChange={(e) => setUnit(e.target.value)}
            className="input-md"
            placeholder="Enter Unit"
            required
          />
          <span className="input-error"></span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" class="input-label">
            Height
          </label>
          <input
            type="text"
            value={Height}
            onChange={(e) => setHeight(e.target.value)}
            className="input-md"
            placeholder="Enter Height"
            required
          />
          <span className="input-error"></span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" class="input-label">
            Width
          </label>
          <input
            type="text"
            name="name"
            value={Width}
            onChange={(e) => setWidth(e.target.value)}
            className="input-md"
            placeholder="Enter Width"
            required
          />
          <span className="input-error"></span>
        </div>
      </div>
      {error && <span className="text-center mt-5 text-red-500">{error}</span>}
      <div className="flex items-center justify-center mt-5">
        <button
          onClick={AddingData}
          className="btn-md w-full flex items-center justify-center"
        >
          <TbList size={18} className="mr-2" />
          Add To Modular Kitchen
        </button>
      </div>
    </div>
  );
};

export default ItemBHK;
