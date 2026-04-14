import styles from "./Testimonial.module.css";


export default function Testimonial() {
    return (
        <div data-module-type="testimonial" className={styles.wrapper}>
            <div className="bg-grid bg-grid-border grid grid-cols-8 grid-rows-12 [--column-count:8] last:border-b md:grid-cols-16 md:grid-rows-6 md:[--column-count:16]">

                <div className="relative col-span-5 col-start-4 row-span-5 row-start-8 aspect-square overflow-hidden md:col-span-3 md:col-start-12 md:row-span-3 md:row-start-3 md:aspect-[unset]">
                    <img
                        alt="Photo of Mitchell Hashimoto - Co-Founder at Hashicorp"
                        loading="lazy"
                        decoding="async"
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                            objectFit: "cover"
                        }}
                        src="https://cdn.sanity.io/images/hvk0tap5/production/6c945bf43f176d1c926d0b40399eed4c431a6786-1080x1080.png?w=720&fm=webp&fit=max&auto=format"
                    />
                </div>

                <div className="col-span-6 col-start-1 row-span-6 row-start-2 flex flex-col justify-between gap-8 border-r-1 border-t-1 bg-background p-15 md:col-span-9 md:col-start-3 md:row-span-3 md:row-start-2">
                    <div className="max-w-[800px] text-balance text-body-xxl md:text-body-md lg:text-body-xxl">
                        “Easier than large clouds, more feature-rich than single-purpose hosting providers, Render lets me ship the entirety of my projects in one place.”
                    </div>

                    <div className="typography self-start bg-green-200 px-[1px] font-mono uppercase text-green-900 dark:bg-green-600 dark:text-green-200 text-body-xs">
                        <span className="block md:inline-block">
                            Mitchell Hashimoto,
                        </span>{" "}
                        <span>
                            Co-Founder of Hashicorp
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
