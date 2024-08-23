gsap.registerPlugin(ScrollTrigger);

// gsap.fromTo("#section1",{
//         opacity: 1,
//         scale: 1,
//     },
//     {
//         opacity: 0,
//         // scale: 1.8,
//         scrollTrigger: {
//         trigger: "#section1",
//         start: "10% 0%",
//         end: "100% 10%",
//         scrub: true,
//         markers:true,
//         toggleActions: "restart none none none",
//         },
//     }
// )

gsap.fromTo("#name",{
    opacity: 1,
    scale: 1,
},
{
    opacity: 0,
    scale: 1.8,
    scrollTrigger: {
    trigger: "#section1",
    start: "10% 0%",
    end: "200% 10%",
    scrub: true,
    // markers:true,
    toggleActions: "restart none none none",
    },
})

gsap.fromTo("#logo",{
    opacity: 1,
    scale: 1,
},
{
    opacity: 0,
    scale: 0.8,
    scrollTrigger: {
    trigger: "#section1",
    start: "10% 0%",
    end: "150% 10%",
    scrub: true,
    // markers:true,
    toggleActions: "restart none none none",
    },
})

gsap.fromTo("#tgline",{
    opacity: 1,
    scale: 1,
},
{
    opacity: 0,
    scale: 0.8,
    scrollTrigger: {
    trigger: "#section1",
    start: "10% 0%",
    end: "150% 10%",
    scrub: true,
    // markers:true,
    toggleActions: "restart none none none",
    },
})