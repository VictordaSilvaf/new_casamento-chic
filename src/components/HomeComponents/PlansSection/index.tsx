import Container from "@/components/Container";
import DescriptionSection from "@/components/DescriptionSection";
import TitleSection from "@/components/TitleSection";
import { CheckIcon } from "lucide-react";

const PlansSection = () => {
  const tiers = [
    {
      name: "Freelancer",
      id: "tier-freelancer",
      href: "#",
      price: { monthly: "$19", annually: "$199" },
      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      mostPopular: false,
    },
    {
      name: "Startup",
      id: "tier-startup",
      href: "#",
      price: { monthly: "$29", annually: "$299" },
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      mostPopular: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "#",
      price: { monthly: "$59", annually: "$599" },
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom reporting tools",
      ],
      mostPopular: false,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div id="plan">
      <Container>
        <TitleSection title="OUR PLANS" />
        <DescriptionSection>
          YOU CAN CONFIGURE YOUR PRICING TABLE USING THE GRID SYSTEM IN ORDER TO
          MAKE IT RESPONSIVE FOR SMALL DEVICES.
        </DescriptionSection>

        <div className="isolate mx-auto mt-20 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "ring-2 ring-app-primary rounded-b-3xl mt-8 lg:mt-0"
                  : "ring-1 ring-gray-200 rounded-3xl",
                " p-8 xl:p-10 relative"
              )}
            >
              {tier.mostPopular && (
                <div className="w-full bg-app-primary ring-2 ring-app-primary absolute right-0 -top-9 rounded-t-3xl">
                  <p className=" px-2.5 text-center py-1 text-lg font-semibold text-white">
                    Mais popular
                  </p>
                </div>
              )}

              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? "text-app-primary" : "text-gray-900",
                  "text-lg/8 font-semibold w-full"
                )}
              >
                {tier.name}
              </h3>

              <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {tier.price.monthly}
                </span>
                {/* <span className="text-sm/6 font-semibold text-gray-600">
                  {frequency.priceSuffix}
                </span> */}
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-app-primary text-white shadow-xs transition-all hover:bg-app-primary/60"
                    : "text-app-primary ring-1 ring-app-primary ring-inset transition-all hover:text-white hover:bg-app-primary",
                  "mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Escolher plano
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm/6 text-gray-600 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-app-primary"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PlansSection;
