import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Copy, PencilLine } from "lucide-react";
import toast from "react-hot-toast";

const DisplayTable = () => {
  const navigate = useNavigate();
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  // edit functionality: remove the item from localStorage
  const editPassword = (id) => {
    const itemToEdit = passwordArray.find((item) => item.id === id);

    // clear the old data from localStorage
    const updatedArray = passwordArray.filter((item) => item.id !== id);
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));

    // send the data to manager page for editing
    navigate("/", { state: { editItem: itemToEdit } });
    toast.success("Ready to edit! Manager page check karein.");
  };

  const copyPassword = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard! 📋");
  };

  const deletePassword = (id) => {
    const newArray = passwordArray.filter((item) => item.id !== id);
    setPasswordArray(newArray);
    localStorage.setItem("passwords", JSON.stringify(newArray));

    toast.error("Deleted Successfully!", {
      icon: "🗑️",
      style: { borderRadius: "10px", background: "#333", color: "#fff" },
    });
  };

  return (
    <div className="mx-auto max-w-4xl p-6 min-h-[80vh]">
      <h2 className="font-bold text-3xl py-6 text-slate-800 dark:text-white">
        Your Saved Passwords
      </h2>

      {passwordArray.length === 0 ? (
        <div
          className="text-gray-500 italic p-6 bg-slate-100 dark:bg-slate-900/50
        rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center"
        >
          Password list is empty! Please add some passwords from the Manager
          page. <br />
          <span className="text-sm text-emerald-500 mt-2 inline-block">
            (Hint: Click on the Manager link above to add passwords)
          </span>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-300 dark:border-slate-700 shadow-2xl">
          <table className="table-auto w-full text-left bg-white dark:bg-slate-900">
            <thead className="bg-emerald-500 text-white">
              <tr>
                <th className="py-4 px-6 font-bold uppercase text-sm">
                  Website
                </th>
                <th className="py-4 px-6 font-bold uppercase text-sm">
                  Username
                </th>
                <th className="py-4 px-6 font-bold uppercase text-sm text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {passwordArray.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all"
                >
                  <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                    {item.website}
                  </td>
                  <td className="py-4 px-6 text-slate-700 dark:text-slate-300">
                    {item.username}
                  </td>
                  <td className="py-4 px-6">
                    {/* action buttons */}
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => editPassword(item.id)}
                        className="p-2 text-blue-500 hover:scale-120 transition-all"
                        title="Edit"
                      >
                        <PencilLine size={18} />
                      </button>

                      <button
                        onClick={() => copyPassword(item.password)}
                        className="p-2 text-emerald-600 hover:scale-120 transition-all"
                        title="Copy"
                      >
                        <Copy size={18} />
                      </button>

                      <button
                        onClick={() => deletePassword(item.id)}
                        className="p-2 text-red-600 hover:scale-120 transition-all"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DisplayTable;
