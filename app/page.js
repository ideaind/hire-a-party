export default function EventManagementWebsite() {
  const services = [
    {
      title: "Birthdays",
      description:
        "Thoughtful planning, décor styling, games, and smooth coordination for intimate to medium-sized birthday celebrations.",
    },
    {
      title: "Baby Showers",
      description:
        "Warm, elegant setups with themed decorations, activity planning, styling, and guest experience support.",
    },
    {
      title: "Gender Reveals",
      description:
        "Beautiful reveal concepts, décor arrangements, prop setup, and stress-free execution for memorable family moments.",
    },
    {
      title: "Private Functions",
      description:
        "Home-based and venue-based support for small to medium events including setup, styling, coordination, and hosting flow.",
    },
  ];

  const highlights = [
    "Personalised event styling",
    "Small to medium functions",
    "Home-based, flexible service",
    "Décor, games, setup and coordination",
    "Warm, family-focused approach",
    "Affordable custom packages",
  ];

  const gallery = [
    "Birthday Theme Setup",
    "Elegant Baby Shower",
    "Gender Reveal Backdrop",
    "Private Home Function",
    "Kids Party Activities",
    "Table Styling & Décor",
  ];

  const packages = [
    {
      name: "Starter",
      price: "From $199",
      items: ["Basic décor styling", "Theme coordination", "Setup support"],
    },
    {
      name: "Classic",
      price: "From $399",
      items: ["Decor + games setup", "Backdrop styling", "Event coordination"],
    },
    {
      name: "Premium",
      price: "Custom Quote",
      items: ["End-to-end planning", "Full styling concept", "On-day support"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-semibold tracking-tight">Hire a Party</div>
            <div className="text-sm text-slate-500">
              Small celebrations, beautifully managed
            </div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-slate-950">Services</a>
            <a href="#packages" className="hover:text-slate-950">Packages</a>
            <a href="#about" className="hover:text-slate-950">About</a>
            <a href="#gallery" className="hover:text-slate-950">Gallery</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-rose-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              Boutique event planning for family celebrations in Auckland
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              Beautiful, stress-free events for life’s special moments.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Hire a Party helps plan and style birthdays, baby showers, gender reveals, and private celebrations with a personal touch. From décor and games to setup and coordination, we make your event feel effortless.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/64212934999"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Enquire on WhatsApp
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-900"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <div className="mb-3 text-sm font-medium text-rose-500">What we do</div>
              <div className="text-2xl font-semibold">Planning + Styling</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                End-to-end support for intimate celebrations that still feel elevated and memorable.
              </p>
            </div>
            <div className="mt-10 rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
              <div className="mb-3 text-sm font-medium text-rose-200">Ideal for</div>
              <div className="text-2xl font-semibold">Home & Venue Events</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Flexible services for small to medium functions with practical, hands-on coordination.
              </p>
            </div>
            <div className="rounded-3xl bg-rose-50 p-6 shadow-lg ring-1 ring-rose-100">
              <div className="mb-3 text-sm font-medium text-rose-500">Style</div>
              <div className="text-2xl font-semibold">Warm & Personal</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Designed for families who want professional help without the feel of a big agency.
              </p>
            </div>
            <div className="mt-10 rounded-3xl bg-amber-50 p-6 shadow-lg ring-1 ring-amber-100">
              <div className="mb-3 text-sm font-medium text-amber-600">Easy start</div>
              <div className="text-2xl font-semibold">Custom Packages</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Share your event type, guest count, and theme idea — we’ll tailor a package around it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 rounded-3xl bg-slate-50 p-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Services</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Event support designed for meaningful celebrations.
          </h2>
          <p className="mt-4 text-slate-600">
            Whether you need help with styling only or end-to-end coordination, we offer flexible support that fits your event size, budget, and vision.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xl font-semibold text-slate-900">{service.title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Packages</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Simple pricing options to help clients get started.
            </h2>
            <p className="mt-4 text-slate-600">
              These are starter ranges only. Final pricing can vary based on guest count, décor style, venue, and setup complexity.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="text-xl font-semibold text-slate-900">{pkg.name}</div>
                <div className="mt-2 text-2xl font-semibold text-rose-500">{pkg.price}</div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {pkg.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-300">About Us</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              A home-based event service with heart, detail, and care.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              Hire a Party was created to help families celebrate special moments without the stress of managing everything themselves. We focus on intimate, stylish events with a personal touch — from planning and décor to setup and coordination — so your celebration feels joyful, polished, and easy.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/15 backdrop-blur">
            <div className="text-lg font-semibold">Why clients choose us</div>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-200">
              <li>• Personal service rather than a large-agency experience</li>
              <li>• Flexible support for both home events and hired venues</li>
              <li>• Creative themes, practical planning, and calm execution</li>
              <li>• Suitable for intimate gatherings and medium-size celebrations</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Gallery</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Showcase your past setups and event themes here.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Replace these placeholders with real photos once you have 3–6 event setups. Real imagery will do more for conversion than any amount of text.
            </p>
          </div>
          <div className="hidden text-sm text-slate-500 md:block">
            Replace placeholders with actual event photos
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm"
            >
              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-rose-100 via-white to-amber-100 px-6 text-center text-lg font-medium text-slate-500">
                {item}
              </div>
              <div className="border-t border-slate-200 bg-white px-5 py-4 text-sm text-slate-600">
                Sample showcase area for {item.toLowerCase()}.
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Contact</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Ready to plan your event?
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-600">
              Share your event type, date, location, guest count, and budget range. We’ll come back with a tailored idea and package recommendation.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <div><span className="font-semibold">Phone:</span> +64 21 293 4999</div>
              <div><span className="font-semibold">Email:</span> Email coming soon</div>
              <div><span className="font-semibold">Instagram:</span> Instagram coming soon</div>
              <div><span className="font-semibold">Service Area:</span> Auckland and surrounding areas</div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                The fastest way to book is to message us on WhatsApp with your event type, date, guest count, and budget range.
              </div>

              <a
                href="https://wa.me/64212934999"
                className="block w-full rounded-2xl bg-slate-900 px-6 py-4 text-center text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Hire a Party. All rights reserved.</div>
          <div>Styled for small, meaningful celebrations.</div>
        </div>
      </footer>
    </div>
  );
}
