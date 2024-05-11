import { useForm } from "react-hook-form";

export default function LambForm({ onSubmit, fields,submitText,formTitle,icon }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col py-2 px-2 shadow-lg rounded-xl border border-blue-100 ">
        <h2 className="text-center text-2xl font-bold">{formTitle}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {fields?.map((field, index) => {
          return (
            <div key={index} className={`flex ${field.type === "Checkbox" || field?.type=="Radio"? "flex-row items-center " : "flex-col"} gap-1`}>
              <label className="text-sm capitalize text-black font-semibold">{field.name}</label>
              {field?.type === "Input" && (
                <label class="input input-bordered flex items-center gap-2">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg> */}
                {field?.icon}
                <input type="text" class="grow" placeholder={field?.placeholder} defaultValue={field?.defaultValue}  {...register(field.name, { required: field.required })}/>
              </label>
              )}
                {field?.type === "Date" && (
                <label class="input input-bordered flex items-center gap-2">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg> */}
                {field?.icon}
                <input type="date" class="grow" placeholder={field?.placeholder} defaultValue={field?.defaultValue}  {...register(field.name, { required: field.required })}/>
              </label>
              )}
              {field.type === "Checkbox" && (
                <input
                  type="checkbox"
                  className=" checkbox  w-4 h-4"
                  defaultChecked={field.defaultValue}
                  {...register(field.name, { required: field.required })}
                />
              )}
              {field.type === "Radio" && (
                <div className="flex flex-row gap-1 ">
                  {field.options.map((option, index) => (
                    <label key={index} className="mx-1 flex items-center gap-2">
                      <input
                        type="radio"
                        className="radio w-4 h-4"
                        value={option.value}
                        {...register(field.name, { required: field.required })}
                      />
                      <span>
                
                      {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              )}

              {field.type === "Select" && (
                <select {...register(field.name, { required: field.required })} className="select select-bordered select-sm w-full max-w-xs">
                  {field.options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
              {field.type === "TextArea" && (
                <textarea
                  defaultValue={field.defaultValue}
                  {...register(field.name, { required: field.required })}
                    className="textarea h-24 textarea-bordered"
                    placeholder={field?.placeholder || "Entrez votre message"}
                ></textarea>
              )}
               {field.type === "File" && (
                <label class="">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg> */}
                {field?.icon}
                <input type="file" class="file-input  file-input-sm max-w-xs" placeholder={field?.placeholder} defaultValue={field?.defaultValue}  {...register(field.name, { required: field.required })}/>
              </label>
              )}
              {field.required && errors[field.name] && (
                <span className="text-xs  text-red-600   px-1 rounded">Ce champ est obligatoire !</span>
              )}
            </div>
          );
        })}
        <input type="submit" className="btn bg-purple-600 text-white btn-xs sm:btn-sm md:btn-md " value={submitText}  />
      </form>
    </div>
  );
}
