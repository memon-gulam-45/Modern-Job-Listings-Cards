import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logos-api.apistemic.com/domain:google.com",
      name: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 85,
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logos-api.apistemic.com/domain:meta.com",
      name: "Meta",
      datePosted: "2 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 78,
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logos-api.apistemic.com/domain:amazon.com",
      name: "Amazon",
      datePosted: "3 days ago",
      post: "Operations Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logos-api.apistemic.com/domain:apple.com",
      name: "Apple",
      datePosted: "1 week ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Pune, India",
    },
    {
      brandLogo: "https://logos-api.apistemic.com/domain:netflix.com",
      name: "Netflix",
      datePosted: "10 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 65,
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logos-api.apistemic.com/domain:microsoft.com",
      name: "Microsoft",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 80,
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logos-api.apistemic.com/domain:tesla.com",
      name: "Tesla",
      datePosted: "4 weeks ago",
      post: "Mechanical Design Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Gurugram, India",
    },
    {
      brandLogo: "https://logos-api.apistemic.com/domain:nvidia.com",
      name: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Research Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 40,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2016/10/Adobe-Logo-1993.jpg",
      name: "Adobe",
      datePosted: "2 weeks ago",
      post: "Product Manager",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "Noida, India",
    },
    {
      brandLogo: "https://logos-api.apistemic.com/domain:intel.com",
      name: "Intel",
      datePosted: "10 weeks ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 68,
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              brandLogo={elem.brandLogo}
              name={elem.name}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default App;
