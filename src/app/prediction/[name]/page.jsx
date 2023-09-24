const getPredictedAge = async (name) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};
const getPredictedGender = async (name) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};
const getPredictedCountry = async (name) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

export default async function Name({ params }) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-600">
      <div className='bg-slate-400 p-[40px] flex flex-col shadow-md rounded-lg'>
        <div className="text-blue-600 font-medium">Personal Info</div>
        <div>Age : {age?.age}</div>
        <div>Gender : {gender?.gender}</div>
        <div>Country Code : {country?.country[0]?.country_id}</div>
      </div>
    </div>
  );
}
