import { useState } from "react";
import { Search, MapPin, Clock, Briefcase, ChevronRight, X, BookmarkPlus, Bell, Building2 } from "lucide-react";

/* MARKER-MAKE-KIT-INVOKED */
/* MARKER-MAKE-KIT-DISCOVERY-READ */

const JOB_LISTINGS = [
  {
    id: 1,
    title: "Product Designer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-Time",
    salary: "$110k – $130k / year",
    salaryShort: "$110k–$130k",
    postedDays: 5,
    logo: "TC",
    logoColor: "bg-violet-600",
    tags: ["Figma", "User Research", "Prototyping"],
    description: `We're looking for a talented Product Designer to join our growing design team. In this role, you will be responsible for creating exceptional user experiences across our suite of enterprise SaaS products.

You'll work closely with product managers, engineers, and stakeholders to translate complex business requirements into elegant, intuitive interfaces that delight users and drive key business outcomes.

**Responsibilities:**
- Lead end-to-end design processes from discovery and ideation through to high-fidelity prototypes and design specifications
- Conduct user research, usability testing, and synthesize insights to inform design decisions
- Build and maintain components within our design system in Figma
- Collaborate with engineering to ensure pixel-perfect implementation of designs
- Present design concepts and rationale to cross-functional stakeholders

**Requirements:**
- 3+ years of product design experience in a tech company
- Expert-level proficiency in Figma and the broader design toolchain
- Strong portfolio demonstrating end-to-end product design work
- Experience conducting user research and usability testing
- Excellent communication and presentation skills`,
  },
  {
    id: 2,
    title: "Senior UX Designer",
    company: "NovaBuild Inc.",
    location: "Remote",
    type: "Full-Time",
    salary: "$125k – $145k / year",
    salaryShort: "$125k–$145k",
    postedDays: 2,
    logo: "NB",
    logoColor: "bg-blue-600",
    tags: ["UX Research", "Wireframing", "Design Systems"],
    description: `NovaBuild Inc. is looking for a Senior UX Designer to lead the end-to-end user experience for our enterprise cloud platform. In this role, you will collaborate closely with product management and engineering to transform complex technical workflows into intuitive, elegant digital interfaces.

You'll work closely with product managers, engineers, and stakeholders to translate complex business requirements into elegant, intuitive interfaces that delight users and drive key business outcomes.

**Responsibilities:**
- Lead user research initiatives and translate insights into actionable wireframes and user flows
- Design high-fidelity interactive prototypes that clearly demonstrate complex web application logic
- Mentor junior design team members and advocate for UX best practices across organizational silos
- Conduct rigorous usability testing to validate new feature layouts before engineering hand-off
- Partner with product leads to define long-term user experience strategies

**Requirements:**
- 5+ years of UX design experience, preferably within B2B or enterprise SaaS environments
- Strong portfolio demonstrating a deep understanding of complex user journeys and information architecture
- Advanced proficiency in Figma and modern UX research methodologies
- Proven track record of leveraging user data to solve dense workflow bottlenecks
- Excellent communication and presentation skills`,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Sprout Digital",
    location: "Austin, TX",
    type: "Contract",
    salary: null,
    salaryShort: null,
    postedDays: 8,
    logo: "SD",
    logoColor: "bg-emerald-600",
    tags: ["Interaction Design", "CSS", "React"],
    description: `Sprout Digital is seeking a talented mid-level UI/UX Designer to join our fast-growing creative agency team in Austin. You will work on a diverse range of client projects, designing beautiful, highly functional mobile applications and responsive marketing web experiences.

You'll work closely with product managers, engineers, and stakeholders to translate complex business requirements into elegant, intuitive interfaces that delight users and drive key business outcomes.

**Responsibilities:**
- Create visually stunning user interfaces backed by solid, user-centered design principles
- Develop comprehensive wireframes, user journeys, and site maps for client discovery phases
- Collaborate with front-end developers to ensure design intent matches final web deployment
- Participate in client workshops and present design concepts with clear strategic rationale
- Maintain and expand component libraries tailored to specific client brand guidelines

**Requirements:**
- 2+ years of UI/UX design experience, ideally within an agency or studio setting
- A diverse portfolio displaying both high-end visual design and functional UX layout work
- High proficiency in Figma and the Adobe Creative Cloud suite
- Basic understanding of HTML/CSS capabilities to ensure realistic design execution
- Excellent communication and presentation skills`,
  },
  {
    id: 4,
    title: "Design Systems Lead",
    company: "Axiom Labs",
    location: "New York, NY",
    type: "Full-Time",
    salary: "$140k – $165k / year",
    salaryShort: "$140k–$165k",
    postedDays: 1,
    logo: "AL",
    logoColor: "bg-orange-600",
    tags: ["Design Tokens", "Storybook", "Figma"],
    description: `Axiom Labs is hiring a Design Systems Lead to oversee the creation, scaling, and governance of our unified multi-platform design token system. You will bridge the gap between design and code, ensuring visual consistency across all customer touchpoints.

You'll work closely with product managers, engineers, and stakeholders to translate complex business requirements into elegant, intuitive interfaces that delight users and drive key business outcomes.

**Responsibilities:**
- Architect and maintain a scalable component library in Figma utilized by over 50 product designers
- Partner with engineering leads to align Figma component assets with production React codebases
- Establish clear system documentation, usage patterns, and contribution guidelines for product teams
- Audit existing product interfaces to identify discrepancies and drive alignment with the design system
- Build advanced token pipelines to automate style changes across web and mobile platforms

**Requirements:**
- 6+ years of design experience, with at least 2 years dedicated solely to design systems architecture
- Expert-level understanding of Figma features including auto-layout, variables, and component properties
- Deep familiarity with front-end development frameworks and code repositories`,
  },
  {
    id: 5,
    title: "Product Designer II",
    company: "Fluxio",
    location: "Seattle, WA",
    type: "Full-Time",
    salary: null,
    salaryShort: null,
    postedDays: 12,
    logo: "FX",
    logoColor: "bg-pink-600",
    tags: ["Mobile Design", "iOS", "Android"],
    description: `Fluxio is looking for a Product Designer II to take ownership of core user flows within our collaborative productivity software suite. This role requires a strong generalist skillset, balancing deep analytical product thinking with polished interaction design execution.

You'll work closely with product managers, engineers, and stakeholders to translate complex business requirements into elegant, intuitive interfaces that delight users and drive key business outcomes.

**Responsibilities:**
- Own the complete design lifecycle for new feature sets from initial whiteboard concepts to final release
- Utilize qualitative and quantitative user data to continuously iterate on existing interface pain points
- Deliver production-ready vector UI assets, specs, and animation prototypes to development squads
- Participate in regular design reviews, providing and receiving constructive feedback from peers
- Collaborate with data analysts to measure the real-world performance of newly launched features

**Requirements:**
- 3+ years of experience in product design, interaction design, or a related role
- Strong portfolio showing end-to-end product thinking, wireframing, and high-fidelity execution
- Mastery of Figma and rapid prototyping software tools
- Experience working directly with engineering teams in daily standups and sprint planning
- Excellent communication and presentation skills`,
  },
  {
    id: 6,
    title: "Visual Designer",
    company: "BrandSpark",
    location: "Chicago, IL",
    type: "Part-Time",
    salary: "$60k – $75k / year",
    salaryShort: "$60k–$75k",
    postedDays: 3,
    logo: "BS",
    logoColor: "bg-teal-600",
    tags: ["Branding", "Illustration", "Typography"],
    description: `Brand Spark is on the hunt for a creative Visual Designer to craft compelling digital assets, marketing collateral, and brand identity systems for our growing portfolio of consumer-facing web products.

You'll work closely with product managers, engineers, and stakeholders to translate complex business requirements into elegant, intuitive interfaces that delight users and drive key business outcomes.

**Responsibilities:**
- Produce high-impact marketing layout graphics, social media assets, and vector icon libraries
- Maintain strict adherence to established brand guidelines while continuously pushing creative boundaries
- Support product launch initiatives by designing high-converting, interactive landing page mockups
- Collaborate with marketing managers to produce engaging visual assets for email campaigns and digital ads
- Prepare production-ready assets optimized for web, mobile, and digital display channels

**Requirements:**
- 3+ years of professional visual design or graphic design experience
- Exceptional portfolio showcasing mastery of typography, color theory, grid systems, and branding
- Advanced expertise in Adobe Illustrator, Photoshop, and Figma
- Strong understanding of digital marketing trends and conversion rate optimization principles
- Excellent communication and presentation skills`,
  },
];

function JobCard({
  job,
  isActive,
  onClick,
}: {
  job: (typeof JOB_LISTINGS)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-xl p-4 border transition-all duration-150 cursor-pointer ${
        isActive
          ? "border-violet-500 bg-violet-50 shadow-md shadow-violet-100"
          : "border-border bg-card shadow-sm hover:border-violet-200 hover:shadow-md hover:bg-slate-50"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-lg ${job.logoColor} flex items-center justify-center text-white text-xs shrink-0`}
          style={{ fontWeight: 700 }}
        >
          {job.logo}
        </div>
        <div className="min-w-0 flex-1">
          <div className={`truncate ${isActive ? "text-violet-700" : "text-foreground"}`} style={{ fontWeight: 600, fontSize: "0.9rem" }}>
            {job.title}
          </div>
          <div className="text-muted-foreground truncate" style={{ fontSize: "0.8rem" }}>
            {job.company}
          </div>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-muted-foreground" style={{ fontSize: "0.72rem" }}>
              <MapPin size={10} />
              {job.location}
            </span>
            {job.salaryShort ? (
              <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
                {job.salaryShort}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-red-600 bg-red-50 rounded-full px-2 py-0.5" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
                No Salary Provided
              </span>
            )}
          </div>
        </div>
        {isActive && (
          <ChevronRight size={16} className="text-violet-500 shrink-0 mt-1" />
        )}
      </div>
    </button>
  );
}

function SkipModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.62)" }}>
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 relative"
        style={{ animation: "fadeInScale 0.18s ease-out" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors rounded-lg p-1 hover:bg-muted"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center">
            <BookmarkPlus size={26} className="text-slate-500" />
          </div>
          <div>
            <h2 className="text-foreground mb-1">Job Skipped</h2>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "0.9rem" }}>
              You've skipped <strong>Product Designer</strong> at <strong>TechCorp Solutions</strong>. It won't appear in your feed, but you can always find it in your skipped jobs history.
            </p>
          </div>
          <div className="flex gap-3 w-full pt-1">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              style={{ fontWeight: 600, fontSize: "0.9rem" }}
            >
              Got it
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
              style={{ fontWeight: 500, fontSize: "0.9rem" }}
            >
              Undo Skip
            </button>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeInScale { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }`}</style>
    </div>
  );
}

export default function App() {
  const [activeJobId, setActiveJobId] = useState(1);
  const [showSkipModal, setShowSkipModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const activeJob = JOB_LISTINGS.find((j) => j.id === activeJobId) ?? JOB_LISTINGS[0];

  return (
    <div className="size-full flex flex-col bg-background min-h-screen">
      {/* Global Nav Header */}
      <header className="h-14 border-b border-border bg-white flex items-center px-6 gap-4 shrink-0 z-10">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
            <Briefcase size={14} className="text-white" />
          </div>
          <span className="text-foreground" style={{ fontWeight: 700, fontSize: "1rem" }}>JobSeeker</span>
        </div>

        {/* Centered Search */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search jobs, companies, keywords…"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-input-background border border-transparent focus:border-violet-400 focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
              style={{ fontSize: "0.875rem" }}
            />
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button className="relative text-muted-foreground hover:text-foreground transition-colors">
            <Bell size={18} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-violet-500" />
          </button>
          <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white" style={{ fontWeight: 700, fontSize: "0.75rem" }}>
            AJ
          </div>
        </div>
      </header>

      {/* Page Title Bar */}
      <div className="px-6 py-3 border-b border-border bg-white flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-foreground" style={{ fontSize: "1rem", lineHeight: 1.4 }}>Job Seeker View — All Listings</h1>
          <p className="text-muted-foreground" style={{ fontSize: "0.8rem" }}>{JOB_LISTINGS.length} positions match your profile</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="text-muted-foreground border border-border rounded-lg px-3 py-1.5 bg-white hover:border-violet-300 focus:outline-none focus:border-violet-400 transition-colors" style={{ fontSize: "0.8rem" }}>
            <option>Most Recent</option>
            <option>Salary: High to Low</option>
            <option>Best Match</option>
          </select>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Column — Job Card Feed */}
        <aside className="w-80 shrink-0 border-r border-border bg-slate-50 overflow-y-auto">
          <div className="p-3 flex flex-col gap-2">
            {JOB_LISTINGS.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isActive={job.id === activeJobId}
                onClick={() => setActiveJobId(job.id)}
              />
            ))}
          </div>
        </aside>

        {/* Main Detail Panel */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-3xl mx-auto px-8 py-8">
            {/* Company + Title Header */}
            <div className="flex items-start gap-4 mb-5">
              <div className={`w-14 h-14 rounded-xl ${activeJob.logoColor} flex items-center justify-center text-white shrink-0`} style={{ fontWeight: 800, fontSize: "1rem" }}>
                {activeJob.logo}
              </div>
              <div>
                <h1 style={{ fontSize: "1.6rem", lineHeight: 1.25 }}>{activeJob.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground mt-0.5" style={{ fontSize: "0.9rem" }}>
                  <Building2 size={14} />
                  <span>{activeJob.company}</span>
                  <span className="text-border">·</span>
                  <MapPin size={14} />
                  <span>{activeJob.location}</span>
                </div>
              </div>
            </div>

            {/* Salary Highlight Bar */}
            {activeJob.salary ? (
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-3.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
                  <span className="text-white" style={{ fontSize: "0.85rem", fontWeight: 800 }}>$</span>
                </div>
                <div>
                  <div className="text-emerald-800" style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                    Salary Range: {activeJob.salary}
                  </div>
                  <div className="text-emerald-600" style={{ fontSize: "0.78rem" }}>Competitive compensation · equity not included</div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-5 py-3.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-red-400 flex items-center justify-center shrink-0">
                  <span className="text-white" style={{ fontSize: "0.85rem", fontWeight: 800 }}>$</span>
                </div>
                <div>
                  <div className="text-red-800" style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                    No Salary Provided
                  </div>
                  <div className="text-red-500" style={{ fontSize: "0.78rem" }}>This employer has not disclosed compensation details</div>
                </div>
              </div>
            )}

            {/* Metadata Pills */}
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200" style={{ fontSize: "0.82rem", fontWeight: 500 }}>
                <Briefcase size={13} />
                {activeJob.type}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200" style={{ fontSize: "0.82rem", fontWeight: 500 }}>
                <Clock size={13} />
                Posted {activeJob.postedDays} day{activeJob.postedDays !== 1 ? "s" : ""} ago
              </span>
              {activeJob.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100" style={{ fontSize: "0.82rem", fontWeight: 500 }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-border mb-6" />

            {/* Job Description */}
            <div className="text-foreground leading-relaxed mb-10" style={{ fontSize: "0.9rem" }}>
              {activeJob.description.split("\n\n").map((block, i) => {
                if (block.startsWith("**") && block.endsWith("**")) {
                  return (
                    <h3 key={i} className="mt-5 mb-2 text-foreground" style={{ fontSize: "0.95rem" }}>
                      {block.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (block.startsWith("- ")) {
                  return (
                    <ul key={i} className="list-disc list-inside space-y-1.5 text-muted-foreground mb-3 ml-1">
                      {block.split("\n").map((line, j) => (
                        <li key={j}>{line.replace(/^- /, "")}</li>
                      ))}
                    </ul>
                  );
                }
                const rendered = block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
                return (
                  <p key={i} className="text-muted-foreground mb-3" dangerouslySetInnerHTML={{ __html: rendered }} />
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="sticky bottom-0 bg-white pt-4 pb-2 border-t border-border">
              <div className="flex items-center gap-3">
                <button
                  className="flex-1 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition-colors shadow-sm shadow-violet-200"
                  style={{ fontWeight: 700, fontSize: "0.95rem" }}
                >
                  Apply Now
                </button>
                <button
                  onClick={() => setShowSkipModal(true)}
                  className="flex-1 py-3 rounded-xl border-2 border-border text-foreground hover:border-slate-300 hover:bg-slate-50 transition-colors"
                  style={{ fontWeight: 600, fontSize: "0.95rem" }}
                >
                  Skip Job
                </button>
                <button className="w-11 h-11 shrink-0 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50 transition-colors">
                  <BookmarkPlus size={18} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Skip Job Modal Overlay */}
      {showSkipModal && <SkipModal onClose={() => setShowSkipModal(false)} />}
    </div>
  );
}
