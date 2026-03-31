export default function EventManagementWebsite() {
  const services = [
    {
      title: "Birthday Celebrations",
      description:
        "Styled setups, balloon arrangements, backdrop design, table décor, and on-site setup for memorable birthdays.",
    },
    {
      title: "Baby Showers",
      description:
        "Elegant, warm, photo-ready setups with thoughtful styling for intimate baby showers and family gatherings.",
    },
    {
      title: "Gender Reveals",
      description:
        "Beautiful reveal styling, décor concepts, props, and setup support to create a polished and joyful moment.",
    },
    {
      title: "Private Events",
      description:
        "Décor and styling for small to medium celebrations at home or venues, tailored to your theme and budget.",
    },
  ];

  const highlights = [
    "Styled for intimate events",
    "Auckland-based service",
    "Custom themes and décor",
    "Simple booking process",
    "Warm, premium presentation",
    "Setup support included",
  ];

  const packages = [
    {
      name: "Signature Setup",
      price: "Custom Quote",
      items: [
        "Backdrop and balloon styling",
        "Theme-led décor setup",
        "Ideal for birthdays and baby showers",
      ],
    },
    {
      name: "Celebration Styling",
      price: "Custom Quote",
      items: [
        "Elevated table and space styling",
        "Colour-matched décor concept",
        "Suitable for home and venue events",
      ],
    },
    {
      name: "Full Event Look",
      price: "Custom Quote",
      items: [
        "More complete event visual setup",
        "Larger celebration presentation",
        "Best for premium family occasions",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 border-b border-rose-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-semibold tracking-tight text-slate-900">Hire a Party</div>
            <div className="text-sm text-slate-500">Premium styling for beautiful celebrations</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-slate-950">Services</a>
            <a href="#gallery" className="hover:text-slate-950">Gallery</a>
            <a href="#packages" className="hover:text-slate-950">Packages</a>
            <a href="#about" className="hover:text-slate-950">About</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-rose-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              Auckland event styling for birthdays, baby showers and private celebrations
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              Beautiful event styling that makes your celebration feel special.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Hire a Party creates polished, photo-ready setups for intimate and mid-size celebrations. From balloons and backdrops to décor styling and full setup, we make your event look elevated without making the process difficult.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/64212934999?text=Hi%20Hire%20a%20Party%2C%20I%E2%80%99d%20like%20to%20enquire%20about%20an%20event."
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Enquire on WhatsApp
              </a>
              <a
                href="#gallery"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-900"
              >
                View Our Work
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              Fastest way to book: send your event date, location and theme idea on WhatsApp.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <div className="mb-3 text-sm font-medium text-rose-500">What clients want</div>
              <div className="text-2xl font-semibold">A polished setup</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Décor that feels considered, premium and photo-ready without the stress of doing it yourself.
              </p>
            </div>
            <div className="mt-10 rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
              <div className="mb-3 text-sm font-medium text-rose-200">Best for</div>
              <div className="text-2xl font-semibold">Home & venue celebrations</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Flexible setups for family celebrations, intimate events and stylish milestone moments.
              </p>
            </div>
            <div className="rounded-3xl bg-rose-50 p-6 shadow-lg ring-1 ring-rose-100">
              <div className="mb-3 text-sm font-medium text-rose-500">Approach</div>
              <div className="text-2xl font-semibold">Custom, not generic</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We tailor the colour palette, look and décor details to suit your event rather than forcing a standard package.
              </p>
            </div>
            <div className="mt-10 rounded-3xl bg-amber-50 p-6 shadow-lg ring-1 ring-amber-100">
              <div className="mb-3 text-sm font-medium text-amber-600">Booking</div>
              <div className="text-2xl font-semibold">Simple enquiry flow</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Share your date, guest count, budget and inspiration images — we’ll come back with a recommended setup.
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
            Event styling designed to look elevated and feel effortless.
          </h2>
          <p className="mt-4 text-slate-600">
            We focus on the visual setup that transforms your event space — from statement balloons and backdrops to styled décor details that make the celebration feel complete.
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

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Gallery</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              A glimpse of the kind of celebration styling we create.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Strong visuals build trust faster than long explanations. Showcasing real setups helps clients imagine what their own event can look like.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/balloon_garland.jpg"
              alt="Balloon garland setup"
              className="h-72 w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/balloon_garland_2.jpg"
              alt="Celebration styling setup"
              className="h-72 w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/decor.jpg"
              alt="Party décor setup"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="packages" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Packages</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Tailored quotes based on your event style and setup scope.
            </h2>
            <p className="mt-4 text-slate-600">
              Rather than pushing a rigid off-the-shelf package, we recommend the right level of styling based on your event type, space and visual ambition.
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
              Thoughtful styling for celebrations that deserve to look special.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              Hire a Party was created for clients who want a beautiful celebration without having to pull every visual detail together themselves. Our focus is on premium presentation, cohesive styling and a smooth setup experience that lets you enjoy the event rather than manage it.
            </p>
          </div>
          <div className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/15 backdrop-blur">
            <div className="text-lg font-semibold">Why people enquire with us</div>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-200">
              <li>• They want something more polished than DIY</li>
              <li>• They want styling that looks premium in photos</li>
              <li>• They want a smoother process from concept to setup</li>
              <li>• They want a celebration that feels personal, not generic</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Contact</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Ready to plan your event?
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-600">
              The easiest way to enquire is on WhatsApp. Send your date, event type, location, budget range and any inspiration photos, and we’ll come back with the best-fit styling approach.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <div><span className="font-semibold">Phone:</span> +64 21 293 4999</div>
              <div><span className="font-semibold">Email:</span> Email coming soon</div>
              <div><span className="font-semibold">Instagram:</span> Instagram coming soon</div>
              <div><span className="font-semibold">Service Area:</span> Auckland and surrounding areas</div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                Best enquiry format: Event type • Preferred date • Location • Guest count • Budget range • Theme or inspiration image
              </div>

              <a
                href="https://wa.me/64212934999?text=Hi%20Hire%20a%20Party%2C%20I%E2%80%99d%20like%20to%20enquire%20about%20an%20event."
                className="block w-full rounded-2xl bg-slate-900 px-6 py-4 text-center text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Enquire on WhatsApp
              </a>

              <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-500">
                Fastest response channel: WhatsApp
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/64212934999?text=Hi%20Hire%20a%20Party%2C%20I%E2%80%99d%20like%20to%20enquire%20about%20an%20event."
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
      >
        WhatsApp Us
      </a>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Hire a Party. All rights reserved.</div>
          <div>Styled for beautiful celebrations.</div>
        </div>
      </footer>
    </div>
  );
}
