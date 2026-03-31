import { motion } from 'framer-motion'
import awsLogo from '../assets/images/amazonwebservices-original-wordmark.svg'
import dockerLogo from '../assets/images/docker-original.svg'
import googleCloudLogo from '../assets/images/TECHSSTACK IMAGES/googlecloud-original.svg'
import javascriptLogo from '../assets/images/TECHSSTACK IMAGES/javascript-original.svg'
import kubernetesLogo from '../assets/images/TECHSSTACK IMAGES/kubernetes-plain.svg'
import makeLogo from '../assets/images/TECHSSTACK IMAGES/make.svg'
import n8nLogo from '../assets/images/TECHSSTACK IMAGES/n8n.svg'
import nextjsLogo from '../assets/images/TECHSSTACK IMAGES/nextjs-original.svg'
import nodejsLogo from '../assets/images/TECHSSTACK IMAGES/nodejs-original.svg'
import pandasLogo from '../assets/images/TECHSSTACK IMAGES/pandas-original.svg'
import postgresqlLogo from '../assets/images/TECHSSTACK IMAGES/postgresql-original.svg'
import pythonLogo from '../assets/images/TECHSSTACK IMAGES/python-original.svg'
import pytorchLogo from '../assets/images/TECHSSTACK IMAGES/pytorch-original.svg'
import reactLogo from '../assets/images/TECHSSTACK IMAGES/react-original.svg'
import tensorflowLogo from '../assets/images/TECHSSTACK IMAGES/tensorflow-original.svg'
import typescriptLogo from '../assets/images/TECHSSTACK IMAGES/typescript-original.svg'
import { fadeUp } from '../lib/motion'

const stacks = [
  {
    title: 'React & Next.js',
    label: 'Frontend',
    icons: [
      {
        src: reactLogo,
        alt: 'React logo',
      },
      {
        src: nextjsLogo,
        alt: 'Next.js logo',
      },
    ],
  },
  {
    title: 'JavaScript & TypeScript',
    label: 'Language',
    icons: [
      {
        src: javascriptLogo,
        alt: 'JavaScript logo',
      },
      {
        src: typescriptLogo,
        alt: 'TypeScript logo',
      },
    ],
  },
  {
    title: 'Node.js & Python',
    label: 'Backend',
    icons: [
      {
        src: nodejsLogo,
        alt: 'Node.js logo',
      },
      {
        src: pythonLogo,
        alt: 'Python logo',
      },
    ],
  },
  {
    title: 'PostgreSQL',
    label: 'Database',
    icons: [
      {
        src: postgresqlLogo,
        alt: 'PostgreSQL logo',
      },
    ],
  },
  {
    title: 'TensorFlow, PyTorch & Pandas',
    label: 'AI/ML',
    icons: [
      {
        src: tensorflowLogo,
        alt: 'TensorFlow logo',
      },
      {
        src: pytorchLogo,
        alt: 'PyTorch logo',
      },
      {
        src: pandasLogo,
        alt: 'Pandas logo',
      },
    ],
  },
  {
    title: 'Docker & Kubernetes',
    label: 'DevOps',
    icons: [
      {
        src: dockerLogo,
        alt: 'Docker logo',
      },
      {
        src: kubernetesLogo,
        alt: 'Kubernetes logo',
      },
    ],
  },
  {
    title: 'AWS & Google Cloud',
    label: 'Cloud',
    icons: [
      {
        src: awsLogo,
        alt: 'AWS logo',
      },
      {
        src: googleCloudLogo,
        alt: 'Google Cloud logo',
      },
    ],
  },
  {
    title: 'n8n & Make',
    label: 'Automation',
    icons: [
      {
        src: n8nLogo,
        alt: 'n8n logo',
      },
      {
        src: makeLogo,
        alt: 'Make logo',
      },
    ],
  },
]

function Technologies() {
  const marqueeStacks = [...stacks, ...stacks]

  return (
    <section id="technologies" className="technologies-shell ambient-section">
      <motion.div
        className="technologies-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="technologies-title">Technologies We Use</h2>
        <p className="technologies-copy">
          We leverage the latest and most reliable technologies to build robust
          solutions.
        </p>
      </motion.div>
      <div className="technologies-marquee">
        <div className="technologies-track">
          {marqueeStacks.map((stack, stackIndex) => (
            <article key={`${stack.title}-${stackIndex}`} className="technology-card">
            <div className={`technology-icons technology-icons--${stack.icons.length}`}>
              {stack.icons.map((icon, index) => (
                <img
                  key={`${stack.title}-${index}`}
                  src={icon.src}
                  alt={icon.alt}
                  className="technology-icon-image"
                  loading="lazy"
                  style={{ animationDelay: `${(index + stackIndex) * 0.22}s` }}
                />
              ))}
            </div>
            <h3 className="technology-title">{stack.title}</h3>
            <p className="technology-label">{stack.label}</p>
          </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
