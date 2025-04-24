
const stats = [
    {
        value: "11 Lakh+",
        label: "Trust Care Me to sell online",
    },
    {
        value: "14 Crore+",
        label: "Customers buying across Bangladesh",
    },
    {
        value: "19000+",
        label: "Pincode Supported for delivery",
    },
    {
        value: "700+",
        label: "Categories to sell online",
    },
];

const StatsCardSection = () => {
    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-[#f3f3f3] rounded-lg p-6"
                >
                    <h3 className="text-3xl font-extrabold text-[#5e0523]">{stat.value}</h3>
                    <p className="font-medium text-gray-500 mt-2">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsCardSection;
