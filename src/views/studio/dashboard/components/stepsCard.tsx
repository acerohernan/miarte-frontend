import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export interface StepsCardProperties {
  iconPath: string;
  title: string;
  description: string;
  steps: Array<{
    label: string;
    link: string;
    completed: boolean;
  }>;
}

const StepsCard: React.FC<StepsCardProperties> = ({
  title,
  description,
  steps,
  iconPath,
}) => {
  return (
    <div className="rounded border p-5 bg-white shadow-lg">
      <Image src={iconPath} alt={title} width={45} height={45} />
      <h3 className="h3 font-medium mt-3">{title}</h3>
      <p className="paragraph mt-2 font-light">{description}</p>
      <div className="mt-6">
        {steps.map((step) => (
          <Link
            href={step.link}
            className="flex items-center justify-start px-4 py-2 mt-3"
          >
            <FiChevronRight className="mx-2 text-gray-500" />
            <span className="paragraph hover:underline font-medium">
              {step.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StepsCard;
