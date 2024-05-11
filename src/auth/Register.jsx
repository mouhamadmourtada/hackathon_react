import LambForm from "../components/LambForm";
const Register = () => {

  const onSubmit = (data) =>{
    console.log(data);
  }
  const fields = [
    { type: "Input", name: "Prénom", defaultValue: "",placeholder:"Prenom ",required: true },
    { type: "Input", name: "Nom", defaultValue: "",placeholder:"Nom ",required: true },
    { type: "Input", name: "Adresse", defaultValue: "",placeholder:"Adresse ",required: true },
    { type: "Date", name: "date-naissance", defaultValue: "",placeholder:"Date de naissance ",required: true },
    { type: "Input", name: "Numéro de téléphone", defaultValue: "",placeholder:"77 123 45 67 ",required: true },
    { type: "Password", name: "Mot de Passe", defaultValue: "",placeholder:"",required: true },
    { type: "Password", name: "Confirmer le mot de passe", defaultValue: "",placeholder:"",required: true },

    { type: "Radio", name: "Genre", defaultValue: "male", required: true, options: [
      { label: "Masculin", value: "male" },
      { label: "Féminin", value: "female" },
    ]},
    { type: "Checkbox", name: "Recevoir des notifications", defaultValue: false, required: true },
  ];

  
  return (
    <div className=" bg-registerBackground bg-cover">
      <div className="bg-primary bg-opacity-55 h-screen w-screen absolute z-0"></div>
      <div className="flex flex-col z-40 md:flex-row h-screen items-center backdrop-blur-sm justify-center">
            {/* formulaire et tout */}
            <div className="xl:w-1/2">
              <div className="py-4 mx-auto w-3/4">
                <LambForm fields={fields} onSubmit={onSubmit} submitText={"Enregistrer"} formTitle={"Inscription"}/>
              </div>
            </div>

            {/* image droite */}
            {/* <div className="bg-indigo-600 hidden lg:block w-1/2 md:w-1/2 xl:w-1/2 h-screen">
              <img src="/images/registerImage1.jpg" alt="" className="w-full h-full object-cover"/>
            </div> */}
        </div>
    </div>
  );
};

export default Register;
