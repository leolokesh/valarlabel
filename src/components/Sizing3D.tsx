import { useState, useEffect } from "react";
import { motion, easeInOut } from "framer-motion";
import { FaRulerVertical, FaWeight, FaTshirt } from "react-icons/fa";

const messageData = [
	{
		key: "height",
		className:
			"absolute top-16 left-4 bg-white text-black px-4 py-1.5 rounded-xl font-medium shadow-md text-xs",
		icon: (
			<FaRulerVertical className="inline-block mr-1 text-purple-400" />
		),
		text: 'Height: 5\'4"',
	},
	{
		key: "bust",
		className:
			"absolute top-36 right-4 bg-white text-black px-4 py-1.5 rounded-xl font-medium shadow-md text-xs",
		icon: <FaWeight className="inline-block mr-1 text-yellow-400" />,
		text: 'Bust: 34"',
	},
	{
		key: "size",
		className:
			"absolute top-56 left-5 bg-white text-black px-4 py-1.5 rounded-xl font-medium shadow-md text-xs",
		icon: null,
		text: "Size: M",
	},
	{
		key: "fit",
		className:
			"absolute bottom-24 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1.5 rounded-xl font-medium shadow-md text-xs",
		icon: <FaTshirt className="inline-block mr-1 text-cyan-400" />,
		text: "Fit: Relaxed",
	},
];

const sectionVariants = {
	hidden: { opacity: 0, y: 60, scale: 0.98 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 1, ease: easeInOut },
	},
};

const Sizing3D = () => {
	const [step, setStep] = useState(0); // 0-3: reveal, 4: all visible, then loop

	useEffect(() => {
		let timeout;
		if (step < messageData.length) {
			timeout = setTimeout(() => setStep(step + 1), 1200);
		} else {
			timeout = setTimeout(() => setStep(0), 2000);
		}
		return () => clearTimeout(timeout);
	}, [step]);

	return (
		<motion.section
			 className="text-theme-plum relative"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={sectionVariants}
		>
			{/* Card Container */}
			<div className="relative w-full max-w-3xl h-[440px] flex items-center justify-center">
				{/* Card Content */}
				<div className="relative w-full h-full rounded-xl flex items-center justify-center z-20 px-4">
					{/* Silhouette */}
					<div className="relative w-80 h-[800px] flex items-center justify-center">
						<img
							src="/silhoutte.png"
							alt="Silhouette"
							className="absolute inset-0 w-full h-full object-contain opacity-80 drop-shadow-xl pointer-events-none"
							draggable={false}
						/>
						{/* Glow Scan Line */}
						<motion.div
							className="absolute left-1/2 -translate-x-1/2 w-3/4 h-[14px] rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 opacity-80 blur-md z-20"
							initial={{ y: "-10%" }}
							animate={{ y: "90%" }}
							transition={{
								repeat: Infinity,
								duration: 2.2,
								ease: "linear",
							}}
						/>
					</div>

					{/* Animated Message Tags - sequenced reveal, then all visible */}
					{messageData.map((msg, i) => (
						<motion.div
							key={msg.key}
							className={msg.className}
							initial={{ opacity: 0 }}
							animate={{
								opacity:
									step >= i + 1 || step === messageData.length
										? 1
										: 0,
							}}
							transition={{ duration: 0.5 }}
						>
							{msg.icon} {msg.text}
						</motion.div>
					))}

					{/* CTA Button
          <div className="absolute bottom-6 left-0 w-full flex justify-center">
            <motion.button
              className="w-56 h-10 bg-gradient-to-r from-purple-500 via-yellow-300 to-sky-400 text-black rounded-xl font-semibold text-base shadow-lg border border-white/20 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.07 }}
            >
              Find Your Fit →
            </motion.button>
          </div> */}
				</div>
			</div>
		</motion.section>
	);
};

export default Sizing3D;
