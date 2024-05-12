import IndiquePage from "../components/IndiquePage";
import Button from "../components/button";
export default function GenererRecette() {
  return (
    <>
      <IndiquePage
        children={"Générer une recette"}
        className={"text-3xl mb-4"}
      />

      {/* <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
          </div>
          <div>
            <Button
              text={"Ajouter un ingrédient"}
              type={"primary"}
              customStyle={"w-24"}
            />
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="">Ingrédient</th>
              <th className="">Quantité</th>
              <th className="">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />{" "}
              </td>
              <td className="border">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </td>
            </tr>
            <tr>
              <td className="border">Tomate</td>
              <td className="border">1kg</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <Button
            text={"Générer la recette"}
            type={"primary"}
            customStyle={"w-24"}
          />
        </div>
      </div> */}
    </>
  );
}
