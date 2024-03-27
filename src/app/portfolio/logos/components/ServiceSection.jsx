import Card from "./Card"
function ServiceSection({ data }) {
  return (
    <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12 m-8">
            {data.map(service => (
            <Card
                key={service.id}
                color={service.color}
                title={service.title}
                description={service.description}
            />
            ))}
        </div>
    </div>
  )
}

export default ServiceSection
