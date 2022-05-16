import BenForm from "../components/BenForm";
import BenList from "../components/BenList";

const Home = () => {
  //  const [response, setResponse] = useState<string>("");

  //Todo: useEffect on new cases addition

  //   const nameInputRef = useRef(null);

  //  const getList = ():JSX.Element | string=>{

  //   const fetcher = (url:string) => fetch(url).then((res) => res.json());
  //   const { data, error } = useSWR("http://localhost:8000/beneficiaryList", fetcher);

  //   // let output

  //   if (error) return "An error has occurred.";
  //   if (!data) return "Loading...";
  //   if (data)
  //     return (
  //       <>
  //         {data.map((x) => (
  //           <h4>{x.beneficiaryName}</h4>
  //         ))}
  //       </>
  //     );
  //  }

  //  const output = getList();

  //   const submitToBackend = async (e:React.SyntheticEvent) => {
  //     e.preventDefault();

  //     const beneficiaryName = nameInputRef.current.value;
  //    await fetch("http://localhost:8000/beneficiary", {
  //      method: "POST",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify({beneficiaryName}),
  //    })
  //      .then((res) => {
  //        console.log(res);

  //        // .json() converts JSON object to JS object
  //        return res.json();
  //      })
  //      .then((data) => setResponse(`${data.beneficiaryName} is added successfully`))
  //      .catch((err) => console.log(err));
  //   };
  return (
    <div className="flex flex-col w-full p-2">
      <BenForm />

      <BenList />
    </div>
  );
};

export default Home;
