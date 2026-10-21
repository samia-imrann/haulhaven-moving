export default function PageHeader({ title, subtitle, bgImage }) {
    return (
        <section className="relative pt-32 pb-16 text-left text-white overflow-hidden bg-[#102A43]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url('${bgImage}')` }}
            ></div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#102A43]/80"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-3 uppercase tracking-wider">{title}</h1>
                <p className="text-lg text-blue-100 max-w-2xl">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}