// assessment_script.js

// Data for the assessment tool (previously inlined)
const assessmentQuestionsData = {
  "pillars": [
    {
      "id": "1",
      "name": "Data Infrastructure",
      "weight": 0.20,
      "description": "Availability, quality, and accessibility of structured/unstructured data",
      "questions": [
        {
          "id": "q1_1",
          "text": "Is data centralized and accessible through a data warehouse or lakehouse?",
          "tooltip": "Look for: Unified data environments, ETL/ELT pipelines.",
          "scoring_rubric": {"0": "Siloed Excel files", "1": "Initial discussions", "2": "Pilot project for one area", "3": "Partially centralized, some key sources integrated", "4": "Largely centralized, most key data accessible", "5": "Modern, fully centralized, governed platform"}
        },
        {
          "id": "q1_2",
          "text": "What percentage of data is clean, labeled, and AI-ready?",
          "tooltip": "Look for: Defined data quality metrics, labeled training sets.",
          "scoring_rubric": {"0": "<10%", "1": "10-20%", "2": "20-40%", "3": "40-60%", "4": "60-80%", "5": ">80% of key data is clean and labeled"}
        },
        {
          "id": "q1_3",
          "text": "Is real-time or batch data available for analysis and model training?",
          "tooltip": "Look for: Streaming data pipelines, real-time dashboards.",
          "scoring_rubric": {"0": "Manual exports only", "1": "Scheduled batch (e.g., daily)", "2": "More frequent batch (e.g., hourly)", "3": "Some near real-time feeds for specific use cases", "4": "Most key data available near real-time", "5": "Real-time APIs or event-driven architecture for critical data"}
        },
        {
          "id": "q1_4",
          "text": "Is a data catalog or metadata management system implemented?",
          "tooltip": "Look for: Collibra, Alation, or custom metadata tooling.",
          "scoring_rubric": {"0": "Tribal knowledge, no formal system", "1": "Basic inventory (e.g., spreadsheet)", "2": "Partial catalog, some key sources documented", "3": "Actively used catalog for key domains, some automation", "4": "Comprehensive catalog with lineage and ownership", "5": "Active data catalog with full automation, ownership, and lineage, integrated with workflows"}
        }
      ]
    },
    {
      "id": "2",
      "name": "Talent & Skills",
      "weight": 0.20,
      "description": "AI/ML expertise, training programs, technical hiring",
      "questions": [
        {
          "id": "q2_1",
          "text": "Do you have in-house AI/ML experts (e.g., data scientists, ML engineers)?",
          "tooltip": "Look for: FTEs dedicated to ML, AI project backlog.",
          "scoring_rubric": {"0": "None, rely entirely on external consultants", "1": "A few individuals with some AI/ML knowledge", "2": "Small, centralized team or a few skilled individuals", "3": "Growing in-house team, some specialized roles", "4": "Established team with diverse AI/ML roles", "5": "Multi-disciplinary, experienced team driving key projects"}
        },
        {
          "id": "q2_2",
          "text": "Are AI/automation upskilling programs available to employees?",
          "tooltip": "Look for: Internal training, certifications, vendor programs.",
          "scoring_rubric": {"0": "No training offered", "1": "Ad-hoc, informal training sessions", "2": "Basic awareness training available to some", "3": "Structured programs for specific roles/departments", "4": "Comprehensive upskilling programs widely available", "5": "Structured, recurring programs integrated into career development, strong adoption"}
        },
        {
          "id": "q2_3",
          "text": "Is there a formal hiring pipeline for technical AI talent?",
          "tooltip": "Look for: AI/ML roles on careers page, recruiter KPIs.",
          "scoring_rubric": {"0": "Reactive hiring, no specific pipeline", "1": "Occasional hiring for AI roles as needs arise", "2": "Some effort to source AI talent, inconsistent process", "3": "Developing a formal pipeline, partnerships with universities/recruiters", "4": "Established pipeline, actively sourcing and attracting AI talent", "5": "Dedicated, proactive pipeline with strong employer brand for AI talent"}
        },
        {
          "id": "q2_4",
          "text": "Are business leaders trained in AI strategy and concepts?",
          "tooltip": "Look for: Exec workshops, AI bootcamps for leadership.",
          "scoring_rubric": {"0": "No exposure or training", "1": "Basic awareness, some leaders attended external talks", "2": "Internal briefings or workshops on AI basics", "3": "Formal training on AI strategy for some leaders", "4": "Most leaders trained in AI strategy and concepts", "5": "Regular strategic sessions on AI for all leaders, AI integrated into leadership development"}
        }
      ]
    },
    {
      "id": "3",
      "name": "Tech Stack Maturity",
      "weight": 0.15,
      "description": "AI tools, cloud readiness, MLOps, APIs",
      "questions": [
        {
          "id": "q3_1",
          "text": "Is your infrastructure cloud-native or AI-ready (e.g., hybrid with scalable compute)?",
          "tooltip": "Look for: AWS, GCP, Azure setups with GPU support.",
          "scoring_rubric": {"0": "On-prem only, legacy systems", "1": "Exploring cloud options, some non-critical workloads migrated", "2": "Hybrid setup, some scalable compute available", "3": "Largely cloud-based, AI-ready infrastructure for key projects", "4": "Cloud-native for most systems, elastic AI-ready infra", "5": "Optimized, elastic, and fully AI-ready cloud-native infrastructure with GPU/TPU access"}
        },
        {
          "id": "q3_2",
          "text": "Do teams have access to modern AI/ML tools (e.g., LLMs, MLOps platforms)?",
          "tooltip": "Look for: Hugging Face, Vertex AI, LangChain, etc.",
          "scoring_rubric": {"0": "No dedicated AI/ML tooling", "1": "Basic open-source tools (e.g., Python, scikit-learn) used ad-hoc", "2": "Standardized set of development tools, some access to cloud ML platforms", "3": "Access to a range of modern tools, including some MLOps capabilities", "4": "Robust, self-service access to comprehensive AI/ML toolchains and platforms", "5": "Cutting-edge tools, MLOps platforms fully integrated, fostering rapid experimentation"}
        },
        {
          "id": "q3_3",
          "text": "Are DevOps or MLOps processes in place for deploying models into production?",
          "tooltip": "Look for: Model versioning, CI/CD pipelines for ML.",
          "scoring_rubric": {"0": "Manual scripts, no formal processes", "1": "Basic version control for code, manual deployment", "2": "Some automated testing, model registry emerging", "3": "CI/CD for some ML projects, model versioning in place", "4": "Mature MLOps for most models, including monitoring", "5": "Fully automated CI/CD, model registry, continuous monitoring, and retraining (AIOps)"}
        },
        {
          "id": "q3_4",
          "text": "Is your architecture API-first and built for interoperability?",
          "tooltip": "Look for: RESTful APIs, microservices, modular design.",
          "scoring_rubric": {"0": "Monolithic architecture, limited APIs", "1": "Some internal APIs, inconsistent design", "2": "Growing number of APIs, some standardization efforts", "3": "API-first approach for new developments, API gateway in use", "4": "Modular, microservices-based architecture with comprehensive API coverage", "5": "Fully API-driven, event-driven architecture, fostering seamless integration and interoperability"}
        }
      ]
    },
    {
      "id": "4",
      "name": "Leadership & Vision",
      "weight": 0.15,
      "description": "Exec alignment, AI strategy, risk appetite",
      "questions": [
        {
          "id": "q4_1",
          "text": "Is there a clearly defined and documented AI strategy?",
          "tooltip": "Look for: Internal docs, roadmaps, executive presentations.",
          "scoring_rubric": {"0": "None, AI efforts are ad-hoc or experimental", "1": "Informal discussions, no documented strategy", "2": "Draft strategy or vision, not yet formalized or communicated", "3": "Documented AI strategy, aligned with some business goals, partially communicated", "4": "Clear, documented AI strategy, aligned with overall business strategy, widely communicated", "5": "Dynamic, well-communicated AI strategy, fully integrated with business goals, regularly reviewed and updated"}
        },
        {
          "id": "q4_2",
          "text": "Are executive sponsors actively involved in AI initiatives?",
          "tooltip": "Look for: Steering committees, public exec advocacy.",
          "scoring_rubric": {"0": "Passive or no executive involvement", "1": "Awareness, but limited active sponsorship", "2": "Some executives sponsor specific pilot projects", "3": "Active sponsorship from key executives, regular updates", "4": "Strong, visible executive sponsorship across multiple initiatives, AI on executive agenda", "5": "Executive team actively champions AI, drives AI culture, and allocates resources strategically"}
        },
        {
          "id": "q4_3",
          "text": "Has a budget been allocated to support AI development and implementation?",
          "tooltip": "Look for: Dedicated AI/innovation budget.",
          "scoring_rubric": {"0": "Opportunistic funding, no dedicated budget", "1": "Small, ad-hoc budget for experiments", "2": "Project-based funding, some allocation for AI initiatives", "3": "Dedicated budget for AI development and implementation, but may be limited", "4": "Significant, dedicated AI budget, aligned with strategic priorities", "5": "Strategic, multi-year AI funding, flexible to support innovation and scaling"}
        }
      ]
    },
    {
      "id": "5",
      "name": "Use Case Pipeline",
      "weight": 0.10,
      "description": "Clarity and volume of practical AI use cases",
      "questions": [
        {
          "id": "q5_1",
          "text": "Is there a well-defined pipeline of potential AI use cases?",
          "tooltip": "Look for: Use case database, backlog, or discovery sessions.",
          "scoring_rubric": {"0": "Ad-hoc identification of use cases", "1": "Informal list of ideas, no structured pipeline", "2": "Some use cases identified, limited prioritization", "3": "Structured process for identifying and evaluating use cases, backlog maintained", "4": "Well-defined pipeline with clear prioritization criteria, regularly reviewed", "5": "Dynamic, robust pipeline of AI use cases, continuously sourced and prioritized based on strategic value"}
        },
        {
          "id": "q5_2",
          "text": "Are use cases prioritized based on feasibility and ROI?",
          "tooltip": "Look for: Use case scoring models or frameworks (e.g., impact vs. effort).",
          "scoring_rubric": {"0": "No formal prioritization method", "1": "Informal prioritization based on perceived urgency or ease", "2": "Some prioritization based on basic criteria (e.g., cost savings)", "3": "Standardized framework for prioritizing use cases (e.g., impact vs. effort), consistently applied", "4": "Data-driven prioritization based on feasibility, ROI, and strategic alignment", "5": "Sophisticated, dynamic prioritization model, continuously optimizing for business value and risk"}
        },
        {
          "id": "q5_3",
          "text": "Is there cross-functional alignment and ownership of AI opportunities?",
          "tooltip": "Look for: Product/ops owning outcomes, not just IT.",
          "scoring_rubric": {"0": "IT-only initiatives, limited business involvement", "1": "Some collaboration, but ownership unclear or siloed", "2": "Business units involved in defining requirements, IT leads execution", "3": "Joint ownership between IT and business for some AI projects", "4": "Strong cross-functional alignment, clear ownership of AI opportunities by business units", "5": "Fully integrated, cross-functional teams co-owning AI initiatives from ideation to deployment and value realization"}
        }
      ]
    },
    {
      "id": "6",
      "name": "Change Management & Culture",
      "weight": 0.10,
      "description": "Employee buy-in, experimentation tolerance",
      "questions": [
        {
          "id": "q6_1",
          "text": "Is a culture of experimentation encouraged and supported?",
          "tooltip": "Look for: Time/space for POCs, fail-fast mindset.",
          "scoring_rubric": {"0": "Risk-averse culture, failure is penalized", "1": "Limited tolerance for experimentation, focus on proven solutions", "2": "Some encouragement for experimentation, but resources may be scarce", "3": "Formal support for experimentation (e.g., innovation days, POC budgets), fail-fast mindset emerging", "4": "Culture actively encourages and rewards experimentation and learning from failures", "5": "Experimentation is embedded in the culture, with dedicated resources, processes, and psychological safety"}
        },
        {
          "id": "q6_2",
          "text": "Are employees generally open to adopting AI-powered tools or workflows?",
          "tooltip": "Look for: Internal feedback, adoption rates.",
          "scoring_rubric": {"0": "Significant pushback and resistance to change", "1": "Skepticism and apprehension towards AI tools", "2": "Mixed reactions, some early adopters, some resistance", "3": "Growing acceptance, employees see benefits of AI tools in specific areas", "4": "Generally positive attitude, high adoption rates for well-implemented AI tools", "5": "Employees actively seek out and embrace AI-powered tools and workflows, providing feedback for improvement"}
        },
        {
          "id": "q6_3",
          "text": "Are employees incentivized to contribute to or innovate with AI solutions?",
          "tooltip": "Look for: Bonus structures, innovation KPIs.",
          "scoring_rubric": {"0": "No incentives for AI-related contributions", "1": "Informal recognition for AI initiatives", "2": "Some non-financial incentives (e.g., awards, public acknowledgement)", "3": "Formal recognition programs, AI contributions considered in performance reviews", "4": "Financial incentives (e.g., bonuses) for successful AI innovations or contributions", "5": "Comprehensive incentive structures, including financial rewards, career advancement, and dedicated innovation time"}
        }
      ]
    },
    {
      "id": "7",
      "name": "Governance & Ethics",
      "weight": 0.10,
      "description": "Data privacy, bias management, auditability",
      "questions": [
        {
          "id": "q7_1",
          "text": "Do you have an AI governance framework (e.g., policies, review boards)?",
          "tooltip": "Look for: Policy documents, oversight boards.",
          "scoring_rubric": {"0": "None, no formal AI governance", "1": "Informal discussions on AI governance, no documented policies", "2": "Basic policies emerging, limited oversight", "3": "Documented AI governance framework, review board established but may lack teeth", "4": "Active, cross-functional AI governance with clear policies, roles, and responsibilities", "5": "Mature, adaptive AI governance framework, fully integrated into AI lifecycle, proactive risk management"}
        },
        {
          "id": "q7_2",
          "text": "Are tools/processes in place to detect and mitigate algorithmic bias?",
          "tooltip": "Look for: Fairness audits, bias testing.",
          "scoring_rubric": {"0": "Unmonitored, no awareness of algorithmic bias", "1": "Awareness of bias, but no formal tools or processes", "2": "Ad-hoc testing for bias in some models", "3": "Formal processes for bias detection and mitigation in development, some tools used", "4": "Systematic bias testing and mitigation throughout AI lifecycle, dedicated tools and expertise", "5": "Proactive bias detection, mitigation, and continuous monitoring embedded in MLOps, with transparency and explainability"}
        },
        {
          "id": "q7_3",
          "text": "Are your AI practices aligned with legal, ethical, and regulatory standards?",
          "tooltip": "Look for: GDPR, HIPAA, AI Act alignment.",
          "scoring_rubric": {"0": "No awareness or consideration of legal/ethical standards", "1": "Basic awareness, some compliance with general data privacy regulations", "2": "Efforts to align with key regulations, but gaps may exist", "3": "Largely aligned with relevant standards, dedicated compliance resources involved", "4": "Proactive alignment with legal, ethical, and regulatory standards, regular audits", "5": "Leading practices in AI ethics and governance, actively shaping and anticipating standards, full transparency"}
        }
      ]
    }
  ],
  "industryBenchmarks": {
    "Manufacturing": {"Data Infrastructure": 65, "Talent & Skills": 55, "Tech Stack Maturity": 60, "Leadership & Vision": 70, "Use Case Pipeline": 50, "Change Management & Culture": 45, "Governance & Ethics": 50, "Overall": 57},
    "Retail & E-Commerce": {"Data Infrastructure": 70, "Talent & Skills": 60, "Tech Stack Maturity": 65, "Leadership & Vision": 75, "Use Case Pipeline": 60, "Change Management & Culture": 55, "Governance & Ethics": 55, "Overall": 63},
    "Finance & Banking": {"Data Infrastructure": 75, "Talent & Skills": 70, "Tech Stack Maturity": 70, "Leadership & Vision": 80, "Use Case Pipeline": 65, "Change Management & Culture": 60, "Governance & Ethics": 75, "Overall": 71},
    "Insurance": {"Data Infrastructure": 70, "Talent & Skills": 65, "Tech Stack Maturity": 65, "Leadership & Vision": 75, "Use Case Pipeline": 60, "Change Management & Culture": 58, "Governance & Ethics": 70, "Overall": 66},
    "Healthcare & Life Sciences": {"Data Infrastructure": 68, "Talent & Skills": 72, "Tech Stack Maturity": 62, "Leadership & Vision": 70, "Use Case Pipeline": 55, "Change Management & Culture": 50, "Governance & Ethics": 65, "Overall": 63},
    "Pharmaceuticals & Biotech": {"Data Infrastructure": 72, "Talent & Skills": 75, "Tech Stack Maturity": 68, "Leadership & Vision": 78, "Use Case Pipeline": 62, "Change Management & Culture": 55, "Governance & Ethics": 70, "Overall": 69},
    "Technology & Software": {"Data Infrastructure": 80, "Talent & Skills": 80, "Tech Stack Maturity": 85, "Leadership & Vision": 85, "Use Case Pipeline": 75, "Change Management & Culture": 70, "Governance & Ethics": 70, "Overall": 79},
    "Telecommunications": {"Data Infrastructure": 60, "Talent & Skills": 58, "Tech Stack Maturity": 62, "Leadership & Vision": 65, "Use Case Pipeline": 52, "Change Management & Culture": 50, "Governance & Ethics": 55, "Overall": 57},
    "Energy & Utilities": {"Data Infrastructure": 55, "Talent & Skills": 50, "Tech Stack Maturity": 50, "Leadership & Vision": 60, "Use Case Pipeline": 45, "Change Management & Culture": 40, "Governance & Ethics": 48, "Overall": 50},
    "Transportation & Logistics": {"Data Infrastructure": 62, "Talent & Skills": 52, "Tech Stack Maturity": 58, "Leadership & Vision": 68, "Use Case Pipeline": 55, "Change Management & Culture": 48, "Governance & Ethics": 50, "Overall": 56},
    "Automotive & Mobility": {"Data Infrastructure": 66, "Talent & Skills": 60, "Tech Stack Maturity": 63, "Leadership & Vision": 72, "Use Case Pipeline": 58, "Change Management & Culture": 52, "Governance & Ethics": 57, "Overall": 61},
    "Aerospace & Defense": {"Data Infrastructure": 63, "Talent & Skills": 65, "Tech Stack Maturity": 60, "Leadership & Vision": 70, "Use Case Pipeline": 53, "Change Management & Culture": 50, "Governance & Ethics": 60, "Overall": 60},
    "Construction & Real Estate": {"Data Infrastructure": 50, "Talent & Skills": 45, "Tech Stack Maturity": 48, "Leadership & Vision": 55, "Use Case Pipeline": 40, "Change Management & Culture": 35, "Governance & Ethics": 42, "Overall": 45},
    "Consumer Packaged Goods (CPG)": {"Data Infrastructure": 67, "Talent & Skills": 57, "Tech Stack Maturity": 61, "Leadership & Vision": 73, "Use Case Pipeline": 57, "Change Management & Culture": 53, "Governance & Ethics": 54, "Overall": 60},
    "Media & Entertainment": {"Data Infrastructure": 73, "Talent & Skills": 68, "Tech Stack Maturity": 72, "Leadership & Vision": 77, "Use Case Pipeline": 68, "Change Management & Culture": 62, "Governance & Ethics": 60, "Overall": 69},
    "Education & EdTech": {"Data Infrastructure": 58, "Talent & Skills": 62, "Tech Stack Maturity": 55, "Leadership & Vision": 60, "Use Case Pipeline": 50, "Change Management & Culture": 55, "Governance & Ethics": 52, "Overall": 56},
    "Government & Public Sector": {"Data Infrastructure": 52, "Talent & Skills": 55, "Tech Stack Maturity": 48, "Leadership & Vision": 58, "Use Case Pipeline": 42, "Change Management & Culture": 45, "Governance & Ethics": 58, "Overall": 51},
    "Legal & Professional Services": {"Data Infrastructure": 64, "Talent & Skills": 68, "Tech Stack Maturity": 60, "Leadership & Vision": 65, "Use Case Pipeline": 50, "Change Management & Culture": 58, "Governance & Ethics": 62, "Overall": 61},
    "Hospitality & Travel": {"Data Infrastructure": 57, "Talent & Skills": 53, "Tech Stack Maturity": 52, "Leadership & Vision": 63, "Use Case Pipeline": 48, "Change Management & Culture": 46, "Governance & Ethics": 49, "Overall": 53},
    "Other / Multinational": {"Data Infrastructure": 65, "Talent & Skills": 65, "Tech Stack Maturity": 65, "Leadership & Vision": 70, "Use Case Pipeline": 60, "Change Management & Culture": 60, "Governance & Ethics": 60, "Overall": 64} 
  },
  "roadmapReportContent": [], // This will be populated by roadmapReportData
  "reportStrings": {
    "title": "Your AI Readiness Executive Report",
    "introduction": "This report summarizes your organization\'s current AI readiness based on your self-assessment. It provides an overall score, a breakdown by key pillars, a comparison against industry benchmarks, and tailored recommendations to help you advance your AI maturity."
  }
};

const roadmapReportData = [
    {
        "pillar": "Data Infrastructure",
        "questions": [
            {
                "question": "Is data centralized and accessible?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Your data is fragmented. No central source of truth.",
                        "implication": " AI initiatives will fail to scale or deliver ROI. Teams will waste time wrangling data instead of building solutions.",
                        "what_to_do": "● Assign a C-level data owner (or interim lead) to define and own the data infrastructure roadmap. ● Commission a 90-day audit of all major data assets, platforms, and silos across departments. ● Engage a partner (e.g., Snowflake, Databricks, BigQuery) to advise on infrastructure setup. ● Establish an org-wide directive: all data initiatives must feed into a centralized platform.",
                        "what_to_monitor": "● Milestone: Central platform selected and implementation roadmap approved. ● Metric: % of critical systems integrated into the central platform (quarterly)."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Your data architecture is emerging, but access, structure, and governance remain inconsistent.",
                        "implication": " You risk wasting AI investment if teams can’t access or trust shared data. Pilot programs may stall or deliver weak insights.",
                        "what_to_do": "● Direct the CIO or CDO to standardize access policies and documentation across departments. ● Prioritize data integration projects (e.g., unify CRM, ERP, and product data) to remove critical silos. ● Expand data access to analysts, product owners, and operational teams—not just IT. ● Fund a cross-functional data governance initiative to assign ownership and ensure consistency.",
                        "what_to_monitor": "● Milestone: Department-level access to core datasets achieved. ● Metric: % of teams using centralized data in live AI or analytics projects."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have strong infrastructure foundations. Now it’s about unlocking speed, scale, and intelligent automation.",
                        "implication": " You’re positioned to lead—if you accelerate experimentation and increase the velocity between data and AI-driven decisions.",
                        "what_to_do": "● Instruct your tech team to evaluate opportunities for real-time data processing and edge data capture. ● Sponsor a cross-functional initiative to make curated datasets self-serve (e.g., through data catalogs or semantic layers). ● Require that all AI models in development are connected to production data flows for continuous learning. ● Commission a security and compliance review to ensure scale doesn’t introduce risk.",
                        "what_to_monitor": "● Milestone: Real-time data feeds deployed in at least one AI use case. ● Metric: Time from data generation to model deployment or inference (reduction target set)."
                    }
                ]
            },
            {
                "question": "What % of data is clean, labeled, and AI-ready?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Your data lacks quality and consistency. It’s not ready for AI development or analysis at scale.",
                        "implication": " AI models will be inaccurate, brittle, or never leave the prototype phase. Business teams may lose trust in AI insights.",
                        "what_to_do": "● Appoint a head of data quality or assign a data governance lead to create enterprise standards. ● Commission a cross-functional “data quality sprint” to assess core datasets for accuracy, completeness, and usability. ● Prioritize automated data validation, profiling, and cleansing tools for high-impact sources (e.g., customer, product, operations). ● Begin labeling efforts in high-value areas using internal SMEs or external data annotation partners.",
                        "what_to_monitor": "● Milestone: Top 5 data domains audited and remediated. ● Metric: % of production datasets meeting cleanliness and labeling standards."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " You have partially clean and labeled data, but without standardization or operational scale.",
                        "implication": " AI models are viable in isolated use cases but difficult to scale or generalize. Data duplication and inconsistency may cause drift and stakeholder pushback.",
                        "what_to_do": "● Direct your data engineering or platform team to define and enforce standardized data schemas across business domains. ● Assign ownership of key datasets to business-aligned data stewards. ● Invest in tools for metadata tracking, dataset versioning, and automated labeling (where applicable). ● Align your AI team and business leaders on definitions of “good data” for each critical use case.",
                        "what_to_monitor": "● Milestone: Standardized data definitions and quality metrics adopted across teams. ● Metric: % of AI use cases using pre-labeled, validated datasets."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You’ve built a strong foundation of clean, labeled, AI-ready data.",
                        "implication": " You’re positioned to accelerate model deployment, experimentation, and intelligent automation across the enterprise.",
                        "what_to_do": "● Encourage your teams to implement active learning loops, where model outputs help guide future labeling. ● Scale automated labeling solutions or partnerships in areas like image, document, or audio tagging. ● Extend labeling efforts to support supervised fine-tuning of LLMs or foundation models. ● Incentivize business teams to participate in data quality improvement by tying metrics to operational outcomes.",
                        "what_to_monitor": "● Milestone: AI-ready data coverage extended to all major use-case domains. ● Metric: % of new models trained on high-quality, versioned datasets with embedded lineage."
                    }
                ]
            },
            {
                "question": "Is real-time or batch data available?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Your organization relies on stale, delayed, or manual data flows.",
                        "implication": " AI models that depend on recent or real-time data will be either impossible or inaccurate. Use cases requiring responsiveness or automation are blocked.",
                        "what_to_do": "● Task your CTO, CIO, or CDO with assessing where data latency is hurting decision-making or model effectiveness. ● Fund implementation of basic ETL pipelines that update high-value data sources on a scheduled basis (e.g., every hour instead of daily). ● Instruct your data team to pilot a basic real-time ingestion stream for a single use case (e.g., customer activity or operations). ● Use cloud-native tools (e.g., AWS Kinesis, GCP Pub/Sub, Azure Event Hubs) to avoid heavy custom builds.",
                        "what_to_monitor": "● Milestone: High-priority data source upgraded from static to automated ingestion. ● Metric: Average time lag between data generation and availability for analysis or modeling."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Your pipelines support basic data freshness, but not fast-enough feedback loops for AI systems.",
                        "implication": " You can experiment with AI, but models that need live input (e.g., fraud detection, personalization) are underpowered or delayed.",
                        "what_to_do": "● Direct your engineering team to audit data flow latency across key AI workflows. ● Prioritize real-time ingestion for business-critical domains (e.g., customer interactions, inventory movement, transactions). ● Evaluate lightweight streaming tools like Kafka, Redpanda, or cloud-native alternatives for targeted improvements. ● Build alerting into data pipelines to monitor failures, lag, or volume anomalies.",
                        "what_to_monitor": "● Milestone: Real-time pipeline deployed in at least one high-impact area. ● Metric: Reduction in average pipeline latency for top 3 data sources powering AI systems."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have fast, automated data flows that support real-time inference and decisioning.",
                        "implication": " You’re positioned to scale intelligent, automated workflows—AI can react in milliseconds instead of hours.",
                        "what_to_do": "● Invest in optimizing your stream reliability, cost efficiency, and alerting (e.g., with Datadog, Prometheus, or native cloud tools). ● Direct teams to build or extend real-time model integration into high-value touchpoints (e.g., customer personalization, anomaly detection, logistics ops). ● Explore adopting a data mesh or event-driven architecture to support real-time scaling across business domains. ● Fund deeper collaboration between AI engineers and data platform teams to reduce friction between streams and models.",
                        "what_to_monitor": "● Milestone: End-to-end event-driven AI use case deployed (e.g., real-time fraud detection in production). ● Metric: % of production AI models fed by real-time or sub-minute latency data sources."
                    }
                ]
            },
            {
                "question": "Is metadata cataloging / data discovery in place?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Your data is poorly documented, hard to find, and inconsistently understood across teams.",
                        "implication": " Teams will rebuild existing work, misuse data, or avoid using it entirely—leading to delays and costly mistakes in AI and analytics.",
                        "what_to_do": "● Assign a cross-functional data owner to launch a lightweight metadata catalog using existing tools (Notion, Excel, or a free-tier data catalog). ● Prioritize documentation for your top 10 most frequently used datasets (e.g., sales, customer, operational). ● Appoint data stewards in each function to take ownership of quality and usability. ● Mandate that every new AI or analytics project begins by registering its datasets in the catalog.",
                        "what_to_monitor": "● Milestone: Basic metadata catalog launched and populated with high-value datasets. ● Metric: % of active datasets with clear definitions, owners, and business context."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Metadata systems exist but are underused, out of sync, or disconnected from actual project workflows.",
                        "implication": " AI teams waste time wrangling data, and model quality suffers due to ambiguity in inputs. Collaboration is slowed by constant clarifications.",
                        "what_to_do": "● Instruct your CDO or data platform lead to standardize metadata fields (e.g., owner, refresh rate, lineage, data sensitivity). ● Require each new dataset to be tagged and linked to a team, project, or business process. ● Integrate your catalog with BI and MLOps tools to make it discoverable inside day-to-day workflows. ● Assign a product manager for your internal catalog—treat it as an asset with adoption targets.",
                        "what_to_monitor": "● Milestone: Metadata standards adopted across business and engineering functions. ● Metric: Catalog coverage: % of AI use cases linked to documented, discoverable datasets."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " Metadata is a first-class system in your data architecture, embedded across the org.",
                        "implication": " You can scale AI development, governance, and experimentation with confidence—your systems have institutional memory.",
                        "what_to_do": "● Integrate metadata systems with your MLOps platform to track model inputs, feature drift, and version lineage. ● Encourage internal AI teams to build copilots or assistants that can query the metadata catalog for context-aware recommendations. ● Automate metadata population via ETL/ELT jobs to reduce manual documentation friction. ● Use metadata to track data quality trends over time—and alert teams when upstream sources change.",
                        "what_to_monitor": "● Milestone: Metadata catalog integrated into all stages of the AI/ML lifecycle (discovery → training → monitoring). ● Metric: % of AI pipelines connected to datasets with complete, versioned metadata and active ownership."
                    }
                ]
            }
        ]
    },
    {
        "pillar": "Talent & Skills",
        "questions": [
            {
                "question": "Do you have in-house AI/ML experts?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " You do not have in-house AI/ML talent. Capability is either outsourced or non-existent.",
                        "implication": " You’re dependent on external vendors or consultants and cannot build durable, scalable AI solutions internally.",
                        "what_to_do": "● Direct your CHRO and CTO/CDO to define the specific AI/ML roles you need (e.g., ML engineers, data scientists, analysts). ● Launch an AI hiring initiative aligned with your strategic roadmap—prioritize use-case critical roles first. ● Partner with academic institutions or AI consulting firms for short-term execution support. ● Identify internal high-potential talent who can be upskilled or cross-trained into AI-supporting roles.",
                        "what_to_monitor": "● Milestone: AI hiring plan approved and first wave of roles scoped and posted. ● Metric: Number of AI/ML FTEs onboarded internally within the next two quarters."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " You have partial in-house talent but lack organizational integration and sufficient capacity.",
                        "implication": " AI delivery depends on a few individuals or functions. Scale and business adoption will stall without broader engagement.",
                        "what_to_do": "● Establish cross-functional “AI squads” that embed ML engineers and data scientists alongside product, ops, and business teams. ● Task HR and tech leadership with defining clear career paths and differentiated roles (e.g., data engineer vs. ML engineer). ● Reduce workload bottlenecks by hiring support roles and removing unnecessary firefighting tasks from key specialists. ● Appoint AI champions within business units to act as liaisons and increase demand-side literacy.",
                        "what_to_monitor": "● Milestone: Functional business teams partnered with embedded AI talent. ● Metric: % of AI projects supported by cross-functional teams with internal capability."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a mature AI/ML talent foundation and are ready to scale its business impact.",
                        "implication": " With the right support, you can drive competitive advantage through proprietary AI innovation and operational leverage.",
                        "what_to_do": "● Establish a formal AI Center of Excellence (CoE) to support best practices, governance, and cross-team collaboration. ● Enable internal “AI guilds” or knowledge-sharing communities to improve retention and accelerate skill development. ● Invest in niche skillsets—causal inference, prompt engineering, AI Ops—to build unique internal capabilities. ● Link AI career tracks to business outcomes—enable paths to product ownership, strategic leadership, or commercial R&D.",
                        "what_to_monitor": "● Milestone: AI Center of Excellence or internal AI program formalized and active. ● Metric: Retention rate of AI/ML talent and % of business KPIs directly supported by in-house AI teams."
                    }
                ]
            },
            {
                "question": "Are AI/automation upskilling programs available?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Your workforce lacks structured exposure to AI concepts or tools. Knowledge is concentrated in a few hands.",
                        "implication": " Adoption will be slow, inconsistent, and likely met with skepticism. Business leaders may miss or misapply AI opportunities.",
                        "what_to_do": "● Assign your CHRO or L&D lead to launch a rapid rollout of AI literacy courses (internal or external). ● Focus first on role-specific AI education for operations, finance, HR, and marketing leaders. ● Leverage free or low-cost platforms like Coursera, DataCamp, or LinkedIn Learning for foundational skills. ● Mandate basic AI literacy training for all new hires in relevant functions.",
                        "what_to_monitor": "● Milestone: AI literacy program launched and baseline adoption metrics established. ● Metric: % of employees in target roles completing foundational AI training."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Upskilling efforts are underway but may lack scale, depth, or strategic alignment.",
                        "implication": " Pockets of AI knowledge exist, but you haven’t built a critical mass of AI-literate talent to drive broad transformation.",
                        "what_to_do": "● Direct L&D to build role-specific AI learning paths (e.g., AI for marketers, AI for analysts, AI for engineers). ● Partner with universities or specialized training providers for advanced or niche AI skill development. ● Launch internal AI mentorship programs or communities of practice to share knowledge. ● Incentivize employees to earn AI certifications or complete advanced training modules.",
                        "what_to_monitor": "● Milestone: Role-based AI learning paths implemented and promoted. ● Metric: % of employees achieving intermediate or advanced AI skill certifications."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a strong culture of continuous AI learning and development.",
                        "implication": " Your workforce is adaptable, innovative, and capable of leveraging AI for sustained competitive advantage.",
                        "what_to_do": "● Empower employees to lead internal AI workshops, hackathons, or innovation challenges. ● Invest in advanced AI research partnerships or internal R&D capabilities. ● Create clear career progression paths for AI specialists and AI-literate business leaders. ● Use AI itself to personalize and optimize learning experiences for employees.",
                        "what_to_monitor": "● Milestone: Internal AI innovation program or R&D function established. ● Metric: Number of employee-led AI initiatives or internal AI-driven product/process improvements."
                    }
                ]
            },
            {
                "question": "Is there a formal hiring pipeline for AI talent?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " You lack a proactive strategy for attracting and hiring AI talent.",
                        "implication": " You’ll struggle to compete for scarce AI skills, leading to project delays and missed opportunities.",
                        "what_to_do": "● Task your HR and recruiting teams with developing a dedicated AI talent acquisition strategy. ● Define clear job descriptions and competency models for key AI roles. ● Build relationships with universities, bootcamps, and AI communities to source candidates. ● Invest in employer branding to position your organization as an attractive place for AI professionals.",
                        "what_to_monitor": "● Milestone: AI talent acquisition strategy approved and key roles defined. ● Metric: Time-to-fill for critical AI positions."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Your AI hiring efforts are improving but may not be consistent or strategic enough.",
                        "implication": " You may be ableto fill some AI roles, but competition for top talent remains a challenge. Retention may also be an issue.",
                        "what_to_do": "● Streamline your AI hiring process to improve candidate experience and reduce time-to-hire. ● Implement technical assessments and structured interviews to evaluate AI skills effectively. ● Develop a compelling employee value proposition for AI talent, including competitive compensation, challenging projects, and growth opportunities. ● Focus on building a diverse and inclusive AI team.",
                        "what_to_monitor": "● Milestone: Standardized AI hiring process implemented across relevant departments. ● Metric: Offer acceptance rate for AI talent and diversity metrics for AI teams."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a mature and effective AI talent acquisition and retention engine.",
                        "implication": " You can attract, develop, and retain top AI talent, creating a sustainable competitive advantage.",
                        "what_to_do": "● Position your organization as a thought leader in AI to attract passive candidates. ● Offer internships, fellowships, and co-op programs to build a pipeline of early-career AI talent. ● Create internal mobility programs to allow AI professionals to grow and explore different roles. ● Continuously benchmark your compensation and benefits against the market to ensure competitiveness.",
                        "what_to_monitor": "● Milestone: Recognized as an employer of choice for AI talent in your industry. ● Metric: Employee retention rate for AI professionals and internal promotion rate for AI roles."
                    }
                ]
            },
            {
                "question": "Are business leaders trained in AI strategy?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Your leadership team lacks understanding of AI’s strategic implications.",
                        "implication": " AI initiatives will likely be tactical, underfunded, or misaligned with business priorities. Transformation will stall without executive buy-in.",
                        "what_to_do": "● Organize AI awareness sessions or workshops specifically for the executive team. ● Bring in external experts or consultants to educate leaders on AI trends and opportunities in your industry. ● Share success stories and case studies of AI adoption from other organizations. ● Identify an executive champion to advocate for AI at the leadership level.",
                        "what_to_monitor": "● Milestone: Initial AI awareness program for executives completed. ● Metric: Number of AI initiatives sponsored or actively supported by senior leaders."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Your leaders have some AI awareness, but strategic alignment and commitment may be inconsistent.",
                        "implication": " AI adoption may be fragmented across the organization, with varying levels of support and investment.",
                        "what_to_do": "● Develop a formal AI strategy that is co-created and endorsed by the executive team. ● Integrate AI into strategic planning and budgeting processes. ● Establish a cross-functional AI steering committee with executive representation. ● Provide ongoing AI education and coaching for leaders to deepen their understanding.",
                        "what_to_monitor": "● Milestone: AI strategy formally approved and integrated into business planning. ● Metric: % of strategic business units with AI initiatives aligned to the overall AI strategy."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " Your leadership team is AI-savvy, strategically aligned, and actively driving AI transformation.",
                        "implication": " You are well-positioned to leverage AI for significant business impact and competitive differentiation.",
                        "what_to_do": "● Empower leaders to champion AI within their respective domains and foster a culture of AI innovation. ● Encourage leaders to share AI learnings and best practices across the organization. ● Establish clear metrics and KPIs to track the business value generated by AI initiatives. ● Consider appointing a Chief AI Officer (CAIO) or equivalent role to provide dedicated executive leadership for AI.",
                        "what_to_monitor": "● Milestone: AI embedded into the core strategy and operations of the business. ● Metric: ROI or business value directly attributable to AI initiatives, tracked at the executive level."
                    }
                ]
            }
        ]
    },
    {
        "pillar": "Tech Stack Maturity",
        "questions": [
            {
                "question": "Is your infrastructure cloud-native or AI-ready?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Your infrastructure is not designed to support scalable, flexible AI development or deployment.",
                        "implication": " AI teams will hit roadblocks early—limited compute, provisioning delays, and inconsistent environments will kill experimentation.",
                        "what_to_do": "● Instruct your CTO or cloud architect to assess current infrastructure gaps against AI-readiness benchmarks. ● Prioritize a hybrid or full cloud migration strategy (AWS, Azure, or GCP), focusing on enabling GPU/TPU access and scalable compute first. ● Enable basic provisioning automation (e.g., infrastructure-as-code, containerization) to support rapid AI experimentation. ● Ensure your platform team is tasked with making infrastructure “self-serve” for internal AI teams.",
                        "what_to_monitor": "● Milestone: Cloud migration roadmap approved and first AI-ready environment provisioned. ● Metric: % of AI/ML projects delayed due to infrastructure limitations (should be trending to zero)."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " You have partial AI infrastructure capability, but experimentation and scale are still throttled by technical limitations or process bottlenecks.",
                        "implication": " Projects get started, but deployment is slow. Teams waste time on setup instead of solution-building.",
                        "what_to_do": "● Direct your infrastructure team to build out sandbox environments with autoscaling, GPU access, and cost controls for experimentation. ● Require AI/ML teams to be able to spin up and tear down environments without IT bottlenecks (via Terraform, Kubernetes, etc.). ● Implement cloud-native security and compliance frameworks from the start—retrofits are costly. ● Track and optimize infrastructure cost/performance with tools like CloudWatch, Datadog, or built-in provider analytics.",
                        "what_to_monitor": "● Milestone: AI teams achieve full provisioning independence for dev and test environments. ● Metric: Avg. time to provision AI environments (target: <1 hour for non-prod work)."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have advanced infrastructure in place. It’s enabling—not slowing—AI development, deployment, and experimentation.",
                        "implication": " You’re ready to scale innovation, push AI to the edge, and optimize resources across use cases and regions.",
                        "what_to_do": "● Automate infrastructure provisioning with IaC (Terraform, Pulumi) and use tagging for resource-level cost accountability. ● Implement GPU utilization monitoring and autoscaling logic for high-variance workloads. ● Plan for cross-region failover for mission-critical AI services and real-time inference resilience. ● Begin testing edge deployment for real-time use cases (e.g., IoT, mobile, on-device prediction).",
                        "what_to_monitor": "● Milestone: End-to-end automated infra provisioning deployed for AI development and production pipelines. ● Metric: GPU/compute utilization efficiency rate (waste reduction target set)."
                    }
                ]
            },
            {
                "question": "Do teams have access to AI/ML tools?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Your teams lack access to essential AI/ML development environments and tooling.",
                        "implication": " AI development is limited to a few power users or entirely dependent on outside vendors. Internal capability cannot emerge without frictionless tool access.",
                        "what_to_do": "● Instruct IT and platform teams to provision standard toolkits (e.g., JupyterHub, GitHub Copilot, VS Code, TensorFlow, PyTorch). ● Enable access to cloud-based ML platforms like AWS SageMaker, Google Vertex AI, or Azure ML Studio for fast setup. ● Establish governance guardrails to prevent shadow IT while accelerating experimentation. ● Remove access bottlenecks: eliminate excessive provisioning processes, approvals, or user restrictions.",
                        "what_to_monitor": "● Milestone: Teams in data, engineering, and innovation functions provisioned with core AI/ML tools. ● Metric: % of relevant teams with access to AI/ML development environments."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Tools exist but lack coordination, support, and a clear operating model.",
                        "implication": " AI projects may be inconsistent in quality, hard to scale, or time-consuming to reproduce.",
                        "what_to_do": "● Direct your CTO or VP of Engineering to audit tool usage across teams—identify overlap, underutilization, or version conflicts. ● Consolidate tools where possible and publish approved toolkits with decision-making guidelines. ● Establish starter kits and templates for common workflows (e.g., model training, evaluation, deployment). ● Stand up a platform engineering or MLOps team to support tooling and infrastructure for all AI users.",
                        "what_to_monitor": "● Milestone: Shared, supported AI development environments adopted by 80% of technical teams. ● Metric: Reduction in average time to set up and execute a new AI/ML project."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a mature tooling environment that supports fast, secure, and scalable development.",
                        "implication": " You can now optimize for performance, experimentation velocity, and cross-team reuse of components.",
                        "what_to_do": "● Integrate AI tooling with CI/CD pipelines, model registries, and centralized monitoring/logging tools. ● Establish usage guardrails—limit cost overruns, manage GPU quotas, and enforce role-based permissions. ● Experiment with custom internal developer portals or AI workbenches to reduce cognitive load and context-switching. ● Expand into advanced tooling areas: synthetic data pipelines, LLM fine-tuning environments, and reinforcement learning simulators.",
                        "what_to_monitor": "● Milestone: CI/CD and observability tools fully integrated into AI development stack. ● Metric: Number of AI projects moving from prototype to production with full toolchain integration."
                    }
                ]
            },
            {
                "question": "Are MLOps practices in place?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " You have little to no structure around deploying, monitoring, or maintaining AI models.",
                        "implication": " Models may behave unpredictably, fail silently, or never make it to production. Teams will struggle to iterate, debug, or prove ROI.",
                        "what_to_do": "● Task your AI/ML lead to implement model version control using tools like MLflow, DVC, or Weights & Biases. ● Create a deployment checklist that includes human approval, documentation, and reproducibility requirements. ● Require all models to be registered before deployment—tracking input data, configuration, and output expectations. ● Engage an MLOps consultant or partner to help stand up a basic, auditable deployment workflow.",
                        "what_to_monitor": "● Milestone: First standardized MLOps workflow documented and adopted. ● Metric: % of models deployed with version tracking and reproducibility validation."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " MLOps is partially implemented but lacks standardization and coverage across teams or use cases.",
                        "implication": " Deployment is possible but unreliable. You risk technical debt and slow time-to-value without stronger orchestration and visibility.",
                        "what_to_do": "● Direct your platform team to build CI/CD pipelines for model training, validation, and deployment (e.g., using GitHub Actions, Airflow, or Kubeflow). ● Implement monitoring tools for model drift, performance degradation, and inference latency. ● Establish audit logs and access controls to comply with regulatory or enterprise standards. ● Require that every model have a designated owner responsible for performance review and maintenance.",
                        "what_to_monitor": "● Milestone: Automated model pipeline running in production for key use cases. ● Metric: Mean time to detect (MTTD) and mean time to resolve (MTTR) model failures or drift."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have mature, scalable MLOps capabilities with visibility and control across the full lifecycle.",
                        "implication": " You can iterate rapidly, deploy safely, and scale confidently. MLOps is a force multiplier for AI teams.",
                        "what_to_do": "● Expand use of model registries and metadata stores for traceability and automated documentation. ● Introduce automated retraining and promotion pipelines triggered by feedback loops or business conditions. ● Run A/B tests and canary deployments to validate new models before full rollout. ● Build dashboards that link model performance to business KPIs, not just technical metrics. ● Establish internal SLAs for model deployment, uptime, and refresh cycles.",
                        "what_to_monitor": "● Milestone: Model governance framework formalized and reviewed quarterly. ● Metric: % of production models with real-time performance monitoring + retraining triggers in place."
                    }
                ]
            },
            {
                "question": "Is your architecture API-first and interoperable?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Your architecture is not API-friendly or modular. Integration with AI components is blocked at the infrastructure level.",
                        "implication": " Even well-trained models will sit idle—they can’t plug into operations, customer experiences, or decision processes.",
                        "what_to_do": "● Direct your engineering or platform team to document existing systems and identify where APIs are missing or outdated. ● Wrap core logic and data endpoints in simple RESTful APIs (starting with customer data, transactions, and operational triggers). ● Instruct all new system development to follow API-first principles with reusable interfaces and documentation. ● Ensure AI engineers can easily expose and call models via APIs within your architecture.",
                        "what_to_monitor": "● Milestone: First wave of high-priority systems API-enabled with standard documentation. ● Metric: % of business-critical systems accessible via documented APIs."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " You have APIs, but they’re inconsistent, fragile, or hard to integrate across teams.",
                        "implication": " Teams spend too much time wiring things together instead of building intelligent workflows.",
                        "what_to_do": "● Implement standardized formats like JSON, OpenAPI, or GraphQL across all exposed endpoints. ● Deploy an API gateway or service mesh (e.g., Kong, Istio) to manage load, security, and monitoring centrally. ● Launch an internal developer portal to make endpoints discoverable and reusable. ● Enable AI teams to plug models directly into business systems (e.g., CRM, ERP, logistics) via stable APIs.",
                        "what_to_monitor": "● Milestone: API gateway live, and all internal APIs registered and documented centrally. ● Metric: Avg. time to integrate a model with a downstream business system."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a mature, composable architecture. AI services are interoperable, reusable, and embedded into operations.",
                        "implication": " You can scale new AI use cases with speed and confidence. Your teams are no longer building from scratch—they’re assembling capabilities.",
                        "what_to_do": "● Wrap AI models as model-as-a-service (MaaS) components that can be easily consumed by other applications. ● Implement event-driven patterns to enable real-time communication and data flow between AI services and business systems. ● Foster a culture of API reuse and collaboration across development teams. ● Explore federated learning or other decentralized AI architectures where appropriate.",
                        "what_to_monitor": "● Milestone: AI models available as discoverable, reusable services in an internal marketplace. ● Metric: Number of AI services consumed by multiple applications or business units."
                    }
                ]
            }
        ]
    },
    {
        "pillar": "Leadership & Vision",
        "questions": [
            {
                "question": "Is there a clearly defined AI strategy?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Your organization lacks a coherent AI strategy. Efforts are likely ad hoc, disconnected, or purely experimental.",
                        "implication": " Without a clear vision, AI initiatives will struggle for funding, alignment, and business impact. You risk falling behind competitors.",
                        "what_to_do": "● Assign an executive sponsor to lead the development of a formal AI strategy. ● Conduct a baseline assessment of your current AI capabilities and maturity. ● Define clear business objectives for AI and identify high-impact use cases. ● Develop a roadmap that outlines priorities, investments, and timelines for AI adoption.",
                        "what_to_monitor": "● Milestone: Formal AI strategy documented and approved by executive leadership. ● Metric: % of AI initiatives directly aligned with the documented AI strategy."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " An AI strategy exists but may not be fully socialized, funded, or integrated into overall business planning.",
                        "implication": " AI adoption may be inconsistent or slow. You may struggle to translate strategic intent into tangible business outcomes.",
                        "what_to_do": "● Communicate the AI strategy broadly across the organization to ensure buy-in and alignment. ● Allocate dedicated budget and resources to support strategic AI initiatives. ● Integrate AI into existing business processes and decision-making frameworks. ● Establish clear metrics and KPIs to track the progress and impact of the AI strategy.",
                        "what_to_monitor": "● Milestone: AI strategy integrated into the annual business planning and budgeting cycle. ● Metric: Business value (e.g., revenue uplift, cost savings) generated by AI initiatives aligned with the strategy."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a clear, well-communicated, and actively managed AI strategy that drives business value.",
                        "implication": " AI is a strategic differentiator for your organization, enabling innovation, efficiency, and competitive advantage.",
                        "what_to_do": "● Continuously review and adapt your AI strategy in response to market changes and technological advancements. ● Foster a culture of AI-driven innovation and empower employees to contribute to the AI strategy. ● Explore opportunities to leverage AI for new business models or market expansion. ● Share your AI successes and learnings externally to enhance your brand and attract talent.",
                        "what_to_monitor": "● Milestone: AI strategy recognized as a key driver of business success and competitive advantage. ● Metric: Market share gains, new revenue streams, or other strategic benefits attributable to AI leadership."
                    }
                ]
            },
            {
                "question": "Are executive sponsors actively involved?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Executive engagement in AI is low or non-existent. AI is seen as a technical concern, not a strategic priority.",
                        "implication": " AI initiatives will lack the necessary resources, authority, and cross-functional support to succeed. Transformation efforts will likely fail.",
                        "what_to_do": "● Educate executive leaders on the strategic value and potential risks of AI. ● Identify and cultivate AI champions within the executive team. ● Secure visible executive sponsorship for key AI pilot projects. ● Establish regular AI briefings and updates for the leadership team.",
                        "what_to_monitor": "● Milestone: At least one executive sponsor actively championing a significant AI initiative. ● Metric: Frequency of AI discussions on the executive leadership agenda."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Some executives are engaged, but involvement may be inconsistent or limited to specific projects.",
                        "implication": " AI adoption may be siloed or lack enterprise-wide momentum. Securing broad support and resources can be challenging.",
                        "what_to_do": "● Create a cross-functional AI steering committee with representation from key executive leaders. ● Define clear roles and responsibilities for executive sponsors of AI initiatives. ● Integrate AI progress and outcomes into executive performance metrics and dashboards. ● Encourage executives to communicate the importance of AI and celebrate successes.",
                        "what_to_monitor": "● Milestone: AI steering committee established and meeting regularly with active executive participation. ● Metric: % of strategic AI initiatives with dedicated executive sponsors."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " Executive leadership is highly engaged, providing strong vision, sponsorship, and resources for AI.",
                        "implication": " AI is a top strategic priority, with strong alignment and commitment across the organization. You are well-positioned for AI-driven transformation.",
                        "what_to_do": "● Empower executive sponsors to remove roadblocks and drive cultural change in support of AI. ● Foster a culture of AI literacy and data-driven decision-making at all levels of leadership. ● Encourage executives to act as external advocates for your organization’s AI capabilities. ● Ensure executive compensation and incentives are aligned with AI strategic objectives.",
                        "what_to_monitor": "● Milestone: AI fully embedded in the C-suite agenda and strategic decision-making processes. ● Metric: Executive team’s self-reported confidence and capability in leading AI transformation."
                    }
                ]
            },
            {
                "question": "Is there a dedicated budget for AI?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " AI funding is opportunistic or non-existent. AI is not treated as a strategic investment.",
                        "implication": " AI initiatives will be under-resourced, slow-moving, and unlikely to achieve significant scale or impact.",
                        "what_to_do": "● Develop a business case for AI investment, highlighting potential ROI and strategic benefits. ● Secure seed funding for initial AI pilot projects and proof-of-concepts. ● Advocate for a dedicated AI budget within the annual planning cycle. ● Explore external funding options, such as grants or partnerships, if internal budget is constrained.",
                        "what_to_monitor": "● Milestone: Initial budget allocated for AI experimentation and pilot projects. ● Metric: Total investment (internal and external) committed to AI initiatives."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Some budget is allocated for AI, but it may be insufficient, inconsistent, or project-based.",
                        "implication": " AI initiatives may struggle to scale beyond pilots. Long-term planning and investment in foundational capabilities may be lacking.",
                        "what_to_do": "● Establish a centralized AI budget or funding mechanism to support strategic priorities. ● Develop a multi-year AI investment roadmap aligned with the AI strategy. ● Implement processes for tracking and reporting AI spend and ROI. ● Ensure funding is available for both development and operationalization of AI solutions.",
                        "what_to_monitor": "● Milestone: Centralized AI budget established and aligned with the strategic roadmap. ● Metric: % of AI budget allocated to strategic, long-term initiatives versus tactical projects."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " AI is strategically funded with a dedicated, flexible budget that supports both innovation and scaling.",
                        "implication": " You have the financial resources to pursue ambitious AI goals and sustain long-term AI leadership.",
                        "what_to_do": "● Implement a portfolio management approach to AI investments, balancing risk and reward. ● Empower AI teams with budget autonomy and accountability for outcomes. ● Continuously evaluate the effectiveness of AI spend and optimize resource allocation. ● Explore opportunities for strategic partnerships or acquisitions to accelerate AI capabilities.",
                        "what_to_monitor": "● Milestone: AI investment portfolio actively managed to maximize strategic impact and ROI. ● Metric: Overall ROI or business value generated per dollar invested in AI."
                    }
                ]
            }
        ]
    },
    {
        "pillar": "Use Case Pipeline",
        "questions": [
            {
                "question": "Is there a well-defined use case pipeline?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " AI use cases are identified ad hoc, with no systematic process for discovery or prioritization.",
                        "implication": " You may be pursuing low-value AI projects or missing significant opportunities. Efforts are likely scattered and inefficient.",
                        "what_to_do": "● Establish a formal process for ideating, collecting, and evaluating AI use cases. ● Engage cross-functional teams in brainstorming and identifying potential AI applications. ● Create a centralized repository or backlog for all AI use case ideas. ● Develop basic criteria for initial screening and prioritization of use cases.",
                        "what_to_monitor": "● Milestone: Formal AI use case ideation and collection process established. ● Metric: Number of new AI use cases identified and added to the backlog per quarter."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " A process for identifying use cases exists, but it may lack rigor, consistency, or strategic alignment.",
                        "implication": " Your use case pipeline may be cluttered with tactical or low-impact ideas. Prioritization may be subjective or inconsistent.",
                        "what_to_do": "● Implement a standardized framework for evaluating and prioritizing AI use cases (e.g., based on business value, feasibility, strategic alignment). ● Ensure business stakeholders are actively involved in defining and prioritizing use cases. ● Regularly review and refine the use case pipeline to ensure it remains aligned with business priorities. ● Develop clear business cases for top-priority use cases, including expected ROI and resource requirements.",
                        "what_to_monitor": "● Milestone: Standardized use case prioritization framework adopted and consistently applied. ● Metric: % of active AI projects with a clear business case and expected ROI."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a robust, dynamic, and strategically aligned AI use case pipeline.",
                        "implication": " You are systematically identifying and pursuing high-value AI opportunities that drive business impact and competitive advantage.",
                        "what_to_do": "● Continuously scan the external environment for new AI trends and opportunities. ● Foster a culture of innovation where employees are encouraged to propose and experiment with new AI use cases. ● Implement agile methodologies to rapidly prototype and validate promising use cases. ● Use data and analytics to track the performance of your use case pipeline and identify areas for improvement.",
                        "what_to_monitor": "● Milestone: AI use case pipeline recognized as a key driver of innovation and business value. ● Metric: Velocity of use case progression through the pipeline (ideation to deployment) and overall pipeline value."
                    }
                ]
            },
            {
                "question": "Are use cases prioritized by feasibility & ROI?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " AI use cases are not systematically prioritized, or prioritization is based on gut feel rather than data.",
                        "implication": " Resources may be wasted on low-value or infeasible projects. You may struggle to demonstrate the business value of AI.",
                        "what_to_do": "● Develop clear criteria for assessing the feasibility (technical, operational, data) and potential ROI of AI use cases. ● Implement a scoring model or prioritization matrix to objectively compare and rank use cases. ● Ensure that prioritization decisions are transparent and communicated to stakeholders. ● Start with a few high-impact, feasible “quick win” projects to build momentum and demonstrate value.",
                        "what_to_monitor": "● Milestone: Objective prioritization criteria and scoring model for AI use cases developed and adopted. ● Metric: % of AI project portfolio focused on high-priority (high value, high feasibility) use cases."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Prioritization processes are in place but may not be consistently applied or sufficiently data-driven.",
                        "implication": " Your AI portfolio may not be optimally balanced. You might be over-investing in some areas or under-investing in others.",
                        "what_to_do": "● Refine your prioritization framework with more granular criteria and data inputs. ● Regularly review and re-prioritize your AI use case backlog based on changing business needs and market conditions. ● Ensure that resource allocation is aligned with use case priorities. ● Track the actual ROI and business impact of implemented AI solutions to inform future prioritization decisions.",
                        "what_to_monitor": "● Milestone: AI use case prioritization process regularly reviewed and updated based on performance data. ● Metric: Alignment between AI project investment and prioritized business outcomes."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a sophisticated, data-driven process for prioritizing AI use cases to maximize business value and strategic impact.",
                        "implication": " Your AI investments are highly focused and efficient, consistently delivering measurable results and competitive advantage.",
                        "what_to_do": "● Implement advanced portfolio management techniques to optimize your AI investments across multiple dimensions (e.g., risk, strategic alignment, innovation). ● Use predictive analytics and simulation to forecast the potential impact of different use case scenarios. ● Continuously monitor the performance of your AI portfolio and make dynamic adjustments as needed. ● Share best practices in use case prioritization across the organization.",
                        "what_to_monitor": "● Milestone: AI portfolio management recognized as a core competency and strategic enabler. ● Metric: Overall ROI of the AI project portfolio and its contribution to strategic business objectives."
                    }
                ]
            },
            {
                "question": "Is there cross-functional alignment on AI?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " AI initiatives are siloed within IT or specific departments, with limited collaboration or buy-in from other business units.",
                        "implication": " AI solutions may not meet business needs or be effectively adopted. You risk creating technical solutions in search of a problem.",
                        "what_to_do": "● Establish cross-functional teams for key AI projects, including representatives from business, IT, and data science. ● Foster a shared understanding of AI concepts and terminology across different functions. ● Ensure that business stakeholders are actively involved in defining requirements, providing data, and validating AI solutions. ● Promote a culture of collaboration and knowledge sharing around AI.",
                        "what_to_monitor": "● Milestone: Cross-functional teams established for all strategic AI initiatives. ● Metric: Business stakeholder satisfaction with AI solutions and their involvement in the development process."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Collaboration between IT and business is improving, but true cross-functional alignment and co-ownership of AI may be lacking.",
                        "implication": " AI projects may face challenges in adoption, integration, or scaling due to insufficient business buy-in or operational readiness.",
                        "what_to_do": "● Define clear roles and responsibilities for AI initiatives, with joint accountability between IT and business owners. ● Implement agile methodologies that promote close collaboration and iterative feedback between technical and business teams. ● Co-locate or create dedicated collaboration spaces for cross-functional AI teams. ● Provide training on collaboration and communication skills for AI team members.",
                        "what_to_monitor": "● Milestone: Joint IT-business ownership model for AI initiatives implemented and operational. ● Metric: Adoption rate and business impact of AI solutions co-created by cross-functional teams."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have strong cross-functional alignment and co-creation of AI solutions, with business units actively driving AI adoption.",
                        "implication": " AI is deeply embedded in business processes and decision-making, delivering significant value and transforming operations.",
                        "what_to_do": "● Empower business units to lead AI initiatives within their domains, with IT providing expert support and enabling platforms. ● Foster a network of AI champions and super-users within business functions to drive adoption and share best practices. ● Create incentives and recognition programs that reward cross-functional collaboration on AI. ● Continuously seek feedback from business users to improve AI solutions and identify new opportunities.",
                        "what_to_monitor": "● Milestone: Business units proactively identifying and leading AI-driven transformation initiatives. ● Metric: Extent to which AI is integrated into core business processes and decision-making across the organization."
                    }
                ]
            }
        ]
    },
    {
        "pillar": "Change Management & Culture",
        "questions": [
            {
                "question": "Is a culture of experimentation supported?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " Your culture is risk-averse, and failure is often penalized. Experimentation with AI is discouraged or non-existent.",
                        "implication": " You will struggle to innovate with AI or adapt to changing market conditions. Employees will be hesitant to try new things.",
                        "what_to_do": "● Communicate the importance of experimentation and learning from failure as part of the AI journey. ● Create safe spaces or “sandboxes” for AI experimentation with limited risk. ● Start with small, low-risk AI pilot projects to build confidence and demonstrate the value of experimentation. ● Publicly recognize and celebrate both successful experiments and valuable learnings from failures.",
                        "what_to_monitor": "● Milestone: First set of AI pilot projects launched with a clear mandate for experimentation and learning. ● Metric: Number of AI experiments or proof-of-concepts initiated per quarter."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Some level of experimentation is tolerated, but it may not be actively encouraged or systematically supported.",
                        "implication": " Innovation may be sporadic or limited to certain pockets of the organization. You may not be fully capitalizing on the potential of AI.",
                        "what_to_do": "● Allocate dedicated time, budget, and resources for AI experimentation. ● Implement processes for rapidly testing and iterating on AI ideas (e.g., design thinking, lean startup). ● Provide training on experimentation methodologies and data-driven decision-making. ● Empower employees at all levels to propose and conduct AI experiments.",
                        "what_to_monitor": "● Milestone: Formal program or framework for AI experimentation established and resourced. ● Metric: % of AI projects that incorporate iterative experimentation and learning cycles."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a strong culture of experimentation, where learning from both successes and failures is valued and rewarded.",
                        "implication": " Your organization is agile, innovative, and able to rapidly adapt and leverage new AI capabilities for competitive advantage.",
                        "what_to_do": "● Foster a “test and learn” mindset throughout the organization, not just within AI teams. ● Create platforms and forums for sharing learnings from AI experiments across different teams and functions. ● Encourage bold or “moonshot” AI experiments that have the potential for transformative impact. ● Continuously refine your experimentation processes based on feedback and results.",
                        "what_to_monitor": "● Milestone: Experimentation deeply embedded in the organizational culture and ways of working. ● Metric: Speed and efficiency of the experimentation cycle (idea to learning/scaling)."
                    }
                ]
            },
            {
                "question": "Are employees open to adopting AI tools?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " There is significant resistance or fear among employees regarding AI adoption. Change is actively opposed.",
                        "implication": " AI implementations will likely fail due to lack of user adoption. Productivity may decline, and morale may suffer.",
                        "what_to_do": "● Communicate transparently about the rationale for AI adoption and its potential benefits for employees. ● Address employee concerns and fears about AI (e.g., job displacement, skill gaps) proactively and empathetically. ● Involve employees in the design and testing of AI tools to ensure they are user-friendly and meet their needs. ● Provide comprehensive training and support to help employees adapt to new AI-powered workflows.",
                        "what_to_monitor": "● Milestone: Communication and engagement plan for AI adoption developed and implemented. ● Metric: Employee sentiment and readiness for AI adoption (measured via surveys or feedback channels)."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Employee attitudes towards AI are mixed, with some enthusiasm and some skepticism or resistance.",
                        "implication": " AI adoption may be inconsistent across teams or roles. You may need to invest significant effort in change management.",
                        "what_to_do": "● Identify and empower AI champions or early adopters within different teams to promote AI tools and share success stories. ● Tailor change management interventions to address the specific concerns and needs of different employee groups. ● Highlight quick wins and tangible benefits of AI adoption to build momentum and encourage broader acceptance. ● Create feedback mechanisms for employees to share their experiences and suggestions regarding AI tools.",
                        "what_to_monitor": "● Milestone: Network of AI champions established and actively supporting adoption efforts. ● Metric: User adoption rates for key AI tools and systems."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " Employees are generally enthusiastic and proactive in adopting AI tools and adapting to new ways of working.",
                        "implication": " You can rapidly deploy and scale AI solutions with high levels of user engagement and productivity gains.",
                        "what_to_do": "● Foster a culture of continuous learning and adaptation to ensure employees can keep pace with evolving AI technologies. ● Provide opportunities for employees to co-create and customize AI tools to fit their specific workflows. ● Recognize and reward employees who demonstrate leadership in AI adoption and innovation. ● Continuously monitor user experience and gather feedback to optimize AI tools and support processes.",
                        "what_to_monitor": "● Milestone: AI adoption embedded as a continuous improvement process, driven by employee engagement. ● Metric: Employee-reported satisfaction and productivity improvements resulting from AI tool adoption."
                    }
                ]
            },
            {
                "question": "Are employees incentivized to innovate with AI?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " There are no incentives for employees to engage with AI, or existing incentives may even discourage AI-related innovation.",
                        "implication": " Employees will have little motivation to learn about AI, propose AI ideas, or adopt AI tools. Innovation will be stifled.",
                        "what_to_do": "● Review existing incentive and performance management systems to ensure they do not inadvertently penalize AI-related experimentation or learning. ● Introduce non-financial recognition programs (e.g., awards, public acknowledgement) for employees who contribute to AI initiatives. ● Communicate clearly how AI aligns with organizational goals and employee success. ● Start by focusing on intrinsic motivators like autonomy, mastery, and purpose in AI-related work.",
                        "what_to_monitor": "● Milestone: Initial review of incentive systems completed and basic non-financial recognition for AI contributions introduced. ● Metric: Number of employee-generated AI ideas or proposals submitted (even if informal)."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Some informal or non-financial incentives for AI engagement exist, but they may not be systematic or impactful enough.",
                        "implication": " Employee motivation to innovate with AI may be limited or inconsistent. You may not be fully tapping into the creative potential of your workforce.",
                        "what_to_do": "● Develop a formal framework for recognizing and rewarding AI-related contributions, including both individual and team achievements. ● Consider incorporating AI-related competencies or goals into performance reviews for relevant roles. ● Provide opportunities for employees to showcase their AI projects and share learnings with peers. ● Explore offering dedicated time or resources for employees to work on AI innovation projects (e.g., “20% time”).",
                        "what_to_monitor": "● Milestone: Formal AI recognition program implemented and communicated to employees. ● Metric: Employee participation rates in AI innovation challenges or ideation platforms."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a comprehensive system of financial and non-financial incentives that effectively motivates employees to innovate with AI.",
                        "implication": " Your workforce is highly engaged and proactive in seeking out and developing AI-driven solutions, creating a powerful engine for continuous innovation.",
                        "what_to_do": "● Ensure that incentives are aligned with strategic AI goals and reward both effort and outcomes. ● Regularly review and adapt your incentive programs to keep them relevant and motivating. ● Create career paths and development opportunities for employees who demonstrate excellence in AI innovation. ● Foster a culture where AI-related achievements are widely celebrated and emulated.",
                        "what_to_monitor": "● Milestone: Incentive programs demonstrably driving increased AI innovation and business impact. ● Metric: Number of patents, new products/services, or significant process improvements resulting from employee-led AI initiatives."
                    }
                ]
            }
        ]
    },
    {
        "pillar": "Governance & Ethics",
        "questions": [
            {
                "question": "Do you have an AI governance framework?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " There is no formal AI governance framework in place. AI development and deployment are unmanaged and potentially risky.",
                        "implication": " You face significant risks related to compliance, ethics, security, and reputational damage. AI initiatives may be shut down or cause harm.",
                        "what_to_do": "● Establish a cross-functional AI governance committee or working group with representatives from legal, compliance, IT, data science, and business units. ● Develop a set of core AI principles and policies for your organization, covering areas like data privacy, security, fairness, and transparency. ● Conduct an initial risk assessment of current and planned AI activities. ● Start with a lightweight, pragmatic governance framework that can evolve over time.",
                        "what_to_monitor": "● Milestone: AI governance committee established and initial set of AI principles/policies drafted. ● Metric: % of AI projects undergoing a basic governance review before deployment."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " An AI governance framework is emerging, but it may be incomplete, inconsistently applied, or lack enforcement mechanisms.",
                        "implication": " While some risks are being addressed, significant governance gaps may still exist. You may struggle to ensure responsible AI practices across the organization.",
                        "what_to_do": "● Formalize and document your AI governance framework, including roles, responsibilities, processes, and controls. ● Provide training on AI governance policies and procedures to all relevant employees. ● Implement tools and technologies to support AI governance (e.g., for model monitoring, audit trails, access control). ● Regularly review and update your AI governance framework based on internal learnings and external best practices.",
                        "what_to_monitor": "● Milestone: Comprehensive AI governance framework documented, approved, and communicated. ● Metric: Adherence rates to key AI governance policies and procedures."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a mature, robust, and adaptive AI governance framework that is deeply embedded in your AI lifecycle.",
                        "implication": " You are effectively managing AI risks and ensuring responsible AI practices, building trust with stakeholders and enabling sustainable AI adoption.",
                        "what_to_do": "● Proactively engage with external stakeholders (e.g., regulators, industry bodies, civil society) on AI governance and ethics. ● Continuously monitor the evolving AI regulatory landscape and adapt your governance framework accordingly. ● Foster a strong ethical culture around AI, encouraging open discussion and critical thinking about the societal impact of AI. ● Explore advanced governance techniques, such as AI auditing, certification, or external ethics advisory boards.",
                        "what_to_monitor": "● Milestone: AI governance framework recognized as a best practice and contributing to stakeholder trust. ● Metric: Maturity level of AI governance practices benchmarked against industry standards or frameworks (e.g., NIST AI RMF)."
                    }
                ]
            },
            {
                "question": "Are tools/processes for bias detection in place?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " There is little or no awareness of algorithmic bias, and no tools or processes are in place to detect or mitigate it.",
                        "implication": " Your AI systems may be perpetuating or amplifying harmful biases, leading to unfair outcomes, discrimination, and legal/reputational risks.",
                        "what_to_do": "● Educate data scientists and AI developers on the different types of algorithmic bias and their potential impact. ● Conduct an initial assessment of existing AI models for potential biases. ● Start incorporating basic fairness metrics and bias detection techniques into your model development process. ● Ensure diverse representation in teams involved in designing and developing AI systems.",
                        "what_to_monitor": "● Milestone: Training on algorithmic bias provided to AI development teams. ● Metric: Number of AI models assessed for potential bias."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Awareness of bias is growing, and some ad hoc or manual processes for bias detection are being used.",
                        "implication": " While efforts are being made, your approach to bias detection and mitigation may not be systematic or comprehensive enough to address all risks.",
                        "what_to_do": "● Implement standardized tools and methodologies for bias detection and mitigation throughout the AI lifecycle (data, model, deployment). ● Integrate fairness considerations into your AI governance framework and model review processes. ● Document your bias detection and mitigation efforts for transparency and accountability. ● Engage with domain experts and affected communities to understand potential biases and their impact.",
                        "what_to_monitor": "● Milestone: Standardized bias detection and mitigation toolkit implemented and used by AI teams. ● Metric: % of high-risk AI models undergoing formal bias assessment and mitigation."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " You have a mature, proactive, and systematic approach to detecting and mitigating algorithmic bias, supported by appropriate tools and processes.",
                        "implication": " You are effectively minimizing the risk of unfair or discriminatory outcomes from your AI systems, building trust and promoting ethical AI.",
                        "what_to_do": "● Continuously research and adopt state-of-the-art techniques for bias detection, mitigation, and explainability. ● Implement ongoing monitoring of AI models in production for potential drift or re-emergence of bias. ● Foster a culture of fairness and ethical awareness among all employees involved in AI. ● Publicly report on your efforts to address algorithmic bias and promote fairness in AI (where appropriate).",
                        "what_to_monitor": "● Milestone: Bias and fairness considerations fully integrated into the end-to-end AI MLOps lifecycle. ● Metric: Measurable reduction in identified biases across key AI systems, and evidence of fair outcomes."
                    }
                ]
            },
            {
                "question": "Are AI practices aligned with legal/ethical standards?",
                "roadmap_advice": [
                    {
                        "score_range": "0–30",
                        "diagnosis": " There is limited awareness or consideration of legal, ethical, and regulatory standards relevant to AI.",
                        "implication": " You are exposed to significant compliance risks, potential fines, legal action, and damage to your brand reputation.",
                        "what_to_do": "● Identify all applicable legal, ethical, and regulatory requirements related to your AI activities (e.g., data privacy, consumer protection, industry-specific regulations). ● Conduct a gap analysis to assess your current compliance status. ● Assign clear responsibility for AI compliance within your legal and compliance functions. ● Develop basic policies and training programs to raise awareness of relevant standards.",
                        "what_to_monitor": "● Milestone: Initial inventory of applicable legal/ethical/regulatory AI standards completed. ● Metric: % of AI development team members who have completed basic compliance training."
                    },
                    {
                        "score_range": "31–60",
                        "diagnosis": " Efforts are underway to align AI practices with key standards, but compliance may be inconsistent or incomplete.",
                        "implication": " While some risks are being managed, you may still be vulnerable to compliance failures or ethical lapses in certain areas.",
                        "what_to_do": "● Integrate legal, ethical, and regulatory considerations into your AI governance framework and development lifecycle. ● Implement specific controls and processes to ensure compliance with key standards (e.g., data minimization, consent management, impact assessments). ● Conduct regular audits or assessments of AI systems for compliance. ● Establish channels for employees and external stakeholders to raise ethical concerns related to AI.",
                        "what_to_monitor": "● Milestone: Key AI compliance controls implemented and verified for critical AI systems. ● Metric: Number of identified compliance gaps remediated within a defined timeframe."
                    },
                    {
                        "score_range": "61–100",
                        "diagnosis": " Your AI practices are proactively aligned with a comprehensive set of legal, ethical, and regulatory standards, and you have a strong culture of responsible AI.",
                        "implication": " You are a trusted leader in responsible AI, minimizing risks and building strong relationships with customers, regulators, and society.",
                        "what_to_do": "● Actively participate in industry initiatives and public consultations to shape future AI standards and best practices. ● Implement advanced techniques for AI transparency and explainability to build trust and accountability. ● Conduct regular ethical reviews or impact assessments for new and existing AI systems. ● Foster a culture where ethical considerations are an integral part of all AI-related decision-making.",
                        "what_to_monitor": "● Milestone: Recognized as a leader or contributor to responsible AI standards and practices in your industry. ● Metric: Level of stakeholder trust and confidence in your organization’s AI practices (e.g., via surveys, external ratings)."
                    }
                ]
            }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // Populate industry dropdown first
    (function() {
        const industryDropdown = document.getElementById("industry");
        const industriesList = [
            "Manufacturing",
            "Retail & E-Commerce",
            "Finance & Banking",
            "Insurance",
            "Healthcare & Life Sciences",
            "Pharmaceuticals & Biotech",
            "Technology & Software",
            "Telecommunications",
            "Energy & Utilities",
            "Transportation & Logistics",
            "Automotive & Mobility",
            "Aerospace & Defense",
            "Construction & Real Estate",
            "Consumer Packaged Goods (CPG)",
            "Media & Entertainment",
            "Education & EdTech",
            "Government & Public Sector",
            "Legal & Professional Services",
            "Hospitality & Travel",
            "Other / Multinational"
        ];
        if (industryDropdown) {
            industriesList.forEach(function(industryName) {
                const optionElement = document.createElement("option");
                optionElement.value = industryName;
                optionElement.textContent = industryName;
                industryDropdown.appendChild(optionElement);
            });
        } else {
            console.error("CRITICAL ERROR: Industry select element (#industry) not found. Dropdown cannot be populated."); 
        }
    })();

    // Main assessment logic
    const introSection = document.getElementById("intro-section");
    const assessmentSection = document.getElementById("assessment-section");
    const reportSection = document.getElementById("report-section");

    const startAssessmentBtn = document.getElementById("start-assessment-btn");
    const industrySelect = document.getElementById("industry");
    const gdprConsent = document.getElementById("gdpr-consent");

    const pillarTitle = document.getElementById("pillar-title");
    const pillarDescription = document.getElementById("pillar-description");
    const questionsContainer = document.getElementById("questions-container");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    const prevPillarBtn = document.getElementById("prev-pillar-btn");
    const nextPillarBtn = document.getElementById("next-pillar-btn");
    const viewReportBtn = document.getElementById("view-report-btn");
    const downloadReportBtn = document.getElementById("download-report-btn");

    let currentPillarIndex = 0;
    let userAnswers = {}; // Store answers as {pillarId_questionId: score}
    let pillarScores = {}; // Store calculated scores per pillar {pillarName: score}

    assessmentQuestionsData.roadmapReportContent = roadmapReportData; // Integrate the new roadmap data

    if (startAssessmentBtn) { // Check if button exists before adding listener
        startAssessmentBtn.addEventListener("click", () => {
            const selectedIndustry = industrySelect.value;
            if (!selectedIndustry) {
                alert("Please select your industry.");
                return;
            }
            if (!gdprConsent.checked) {
                alert("Please consent to the privacy statement to proceed.");
                return;
            }
            introSection.style.display = "none";
            assessmentSection.style.display = "block";
            loadPillar(currentPillarIndex);
        });
    } else {
        console.error("CRITICAL ERROR: Start Assessment Button (#start-assessment-btn) not found.");
    }

    function loadPillar(index) {
        const pillar = assessmentQuestionsData.pillars[index];
        pillarTitle.textContent = pillar.name;
        pillarDescription.textContent = pillar.description;
        questionsContainer.innerHTML = ""; // Clear previous questions

        pillar.questions.forEach(q => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");
            
            let tooltipHTML = "";
            if (q.tooltip) {
                tooltipHTML = `<span class="tooltip-icon"> 
                                ? 
                                <span class="tooltip-text">${q.tooltip}</span> 
                             </span>`;
            }

            questionDiv.innerHTML = `<p><strong>${q.text}</strong> ${tooltipHTML}</p>`;
            
            const optionsDiv = document.createElement("div");
            optionsDiv.classList.add("options");
            for (let i = 0; i <= 5; i++) {
                const label = document.createElement("label");
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = q.id;
                radio.value = i;
                radio.required = true;

                if (userAnswers[q.id] !== undefined && parseInt(userAnswers[q.id]) === i) {
                    radio.checked = true;
                }

                radio.addEventListener("change", (event) => {
                    userAnswers[q.id] = parseInt(event.target.value);
                });
                
                let scoreDesc = "";
                if (q.scoring_rubric) {
                    if (i === 0 && q.scoring_rubric["0"]) scoreDesc = ` - ${q.scoring_rubric["0"]}`;
                    else if (i === 5 && q.scoring_rubric["5"]) scoreDesc = ` - ${q.scoring_rubric["5"]}`;
                }

                label.appendChild(radio);
                label.appendChild(document.createTextNode(` ${i}${scoreDesc}`));
                optionsDiv.appendChild(label);
            }
            questionDiv.appendChild(optionsDiv);
            questionsContainer.appendChild(questionDiv);
        });

        updateProgress(index);
        updateNavigationButtons(index);
    }

    function updateProgress(index) {
        const totalPillars = assessmentQuestionsData.pillars.length;
        const percentage = ((index + 1) / totalPillars) * 100;
        progressBar.style.width = percentage + "%";
        progressText.textContent = `Pillar ${index + 1} of ${totalPillars}`;
    }

    function updateNavigationButtons(index) {
        prevPillarBtn.style.display = index > 0 ? "inline-block" : "none";
        nextPillarBtn.style.display = index < assessmentQuestionsData.pillars.length - 1 ? "inline-block" : "none";
        viewReportBtn.style.display = index === assessmentQuestionsData.pillars.length - 1 ? "inline-block" : "none";
    }

    function areAllQuestionsAnsweredInCurrentPillar() {
        const currentPillar = assessmentQuestionsData.pillars[currentPillarIndex];
        for (const question of currentPillar.questions) {
            if (userAnswers[question.id] === undefined) {
                return false;
            }
        }
        return true;
    }

    if (nextPillarBtn) { // Check if button exists
        nextPillarBtn.addEventListener("click", () => {
            if (!areAllQuestionsAnsweredInCurrentPillar()) {
                alert("Please answer all questions in the current pillar before proceeding.");
                return;
            }
            if (currentPillarIndex < assessmentQuestionsData.pillars.length - 1) {
                currentPillarIndex++;
                loadPillar(currentPillarIndex);
            }
        });
    } else {
        console.error("Next Pillar Button not found.");
    }

    if (prevPillarBtn) { // Check if button exists
        prevPillarBtn.addEventListener("click", () => {
            if (currentPillarIndex > 0) {
                currentPillarIndex--;
                loadPillar(currentPillarIndex);
            }
        });
    } else {
        console.error("Previous Pillar Button not found.");
    }

    if (viewReportBtn) { // Check if button exists
        viewReportBtn.addEventListener("click", () => {
            if (!areAllQuestionsAnsweredInCurrentPillar()) {
                alert("Please answer all questions in the final pillar before viewing the report.");
                return;
            }
            calculateScores();
            displayReport();
            assessmentSection.style.display = "none";
            reportSection.style.display = "block";
            window.scrollTo(0, 0);
        });
    } else {
        console.error("View Report Button not found.");
    }

    function calculateScores() {
        let totalWeightedScore = 0;
        assessmentQuestionsData.pillars.forEach(pillar => {
            let pillarTotalRawScore = 0;
            let maxPillarRawScore = 0;
            pillar.questions.forEach(q => {
                pillarTotalRawScore += (userAnswers[q.id] || 0);
                maxPillarRawScore += 5;
            });
            const pillarPercentageScore = (maxPillarRawScore > 0) ? (pillarTotalRawScore / maxPillarRawScore) * 100 : 0;
            pillarScores[pillar.name] = Math.round(pillarPercentageScore);
            totalWeightedScore += pillarPercentageScore * (pillar.weight || (1 / assessmentQuestionsData.pillars.length));
        });

        const overallScore = Math.round(totalWeightedScore);
        document.getElementById("overall-score").textContent = overallScore;
        document.getElementById("readiness-level").textContent = getReadinessLevel(overallScore);
    }

    function getReadinessLevel(score) {
        if (score <= 40) return "Nascent";
        if (score <= 70) return "Developing";
        if (score <= 85) return "Strategic";
        return "Transformative";
    }
    
    function getReadinessLevelForPillar(score) {
        if (score <= 30) return "0–30";
        if (score <= 60) return "31–60";
        return "61–100";
    }

    let radarChart = null;
    let barChart = null;

    function displayReport() {
        document.getElementById("report-title-placeholder").textContent = assessmentQuestionsData.reportStrings.title;
        document.getElementById("report-introduction-placeholder").textContent = assessmentQuestionsData.reportStrings.introduction;
        
        const selectedIndustry = industrySelect.value;
        document.getElementById("benchmark-industry-name").textContent = selectedIndustry || "Selected Industry";

        const pillarNames = assessmentQuestionsData.pillars.map(p => p.name);
        const userPillarScores = pillarNames.map(name => pillarScores[name] || 0);
        const benchmarkData = assessmentQuestionsData.industryBenchmarks[selectedIndustry] || getDefaultBenchmark(pillarNames);
        const benchmarkPillarScores = pillarNames.map(name => benchmarkData[name] || 0);

        const radarCtx = document.getElementById("pillar-radar-chart").getContext("2d");
        if(radarChart) radarChart.destroy();
        radarChart = new Chart(radarCtx, {
            type: "radar",
            data: {
                labels: pillarNames,
                datasets: [{
                    label: "Your Score",
                    data: userPillarScores,
                    backgroundColor: "rgba(243, 112, 33, 0.2)",
                    borderColor: "rgba(243, 112, 33, 1)",
                    pointBackgroundColor: "rgba(243, 112, 33, 1)",
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scale: {
                    ticks: { beginAtZero: true, max: 100 }
                }
            }
        });

        const barCtx = document.getElementById("benchmark-bar-chart").getContext("2d");
        if(barChart) barChart.destroy();
        barChart = new Chart(barCtx, {
            type: "bar",
            data: {
                labels: pillarNames,
                datasets: [
                    {
                        label: "Your Score",
                        data: userPillarScores,
                        backgroundColor: "rgba(243, 112, 33, 0.7)",
                        borderColor: "rgba(243, 112, 33, 1)",
                        borderWidth: 1
                    },
                    {
                        label: selectedIndustry + " Benchmark",
                        data: benchmarkPillarScores,
                        backgroundColor: "rgba(0, 68, 124, 0.7)",
                        borderColor: "rgba(0, 68, 124, 1)",
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });

        generatePillarAnalysis(pillarScores);
    }

    function getDefaultBenchmark(pillarNames) {
        const defaultBench = {};
        pillarNames.forEach(name => defaultBench[name] = 60);
        return defaultBench;
    }

    function generatePillarAnalysis(currentPillarScores) {
        const container = document.getElementById("pillar-analysis-container");
        container.innerHTML = "";

        assessmentQuestionsData.roadmapReportContent.forEach(pillarReportData => {
            const pillarName = pillarReportData.pillar;
            const pillarScore = currentPillarScores[pillarName];
            
            if (pillarScore === undefined) {
                console.warn(`Score for pillar ${pillarName} not found in currentPillarScores.`);
                return;
            }

            const pillarDiv = document.createElement("div");
            pillarDiv.classList.add("pillar-analysis-item");
            pillarDiv.innerHTML = `<h4>${pillarName} (Your Score: ${pillarScore})</h4>`;

            const assessmentPillar = assessmentQuestionsData.pillars.find(p => p.name === pillarName);
            if (!assessmentPillar) {
                console.warn(`Assessment questions for pillar ${pillarName} not found.`);
                return;
            }

            const pillarRoadmap = assessmentQuestionsData.roadmapReportContent.find(p => p.pillar === pillarName);
            if (!pillarRoadmap) {
                console.warn(`Roadmap data for pillar ${pillarName} not found.`);
                return;
            }

            assessmentPillar.questions.forEach(q => {
                const questionScore = userAnswers[q.id] * 20;
                const questionReadinessRange = getReadinessLevelForPillar(questionScore);

                const questionRoadmapEntry = pillarRoadmap.questions.find(rq => rq.question.trim().startsWith(q.text.trim().substring(0, 50)));
                
                if (questionRoadmapEntry) {
                    const advice = questionRoadmapEntry.roadmap_advice.find(adv => adv.score_range === questionReadinessRange);
                    if (advice) {
                        const questionAdviceDiv = document.createElement("div");
                        questionAdviceDiv.style.marginLeft = "20px";
                        questionAdviceDiv.style.marginBottom = "15px";
                        questionAdviceDiv.innerHTML = `<h5>Question: ${q.text} (Your Score: ${userAnswers[q.id]}/5)</h5>`;

                        if (advice.diagnosis) {
                            questionAdviceDiv.innerHTML += `<p><strong>Diagnosis:</strong> ${advice.diagnosis.replace(/●/g, "<br>●").trim()}</p>`;
                        }
                        if (advice.implication) {
                            questionAdviceDiv.innerHTML += `<p><strong>Implication:</strong> ${advice.implication.replace(/●/g, "<br>●").trim()}</p>`;
                        }
                        if (advice.what_to_do) {
                            questionAdviceDiv.innerHTML += `<p><strong>What to Do:</strong> ${advice.what_to_do.replace(/●/g, "<br>●").trim()}</p>`;
                        }
                        if (advice.what_to_monitor) {
                            questionAdviceDiv.innerHTML += `<p><strong>What to Monitor:</strong> ${advice.what_to_monitor.replace(/●/g, "<br>●").trim()}</p>`;
                        }
                        pillarDiv.appendChild(questionAdviceDiv);
                    } else {
                         pillarDiv.innerHTML += `<p><em>No specific advice found for question \"${q.text}\" in the score range ${questionReadinessRange}.</em></p>`;
                    }
                } else {
                    console.warn(`Roadmap entry not found for question: ${q.text} in pillar ${pillarName}`);
                }
            });
            container.appendChild(pillarDiv);
        });
    }

    if (downloadReportBtn) { // Check if button exists
        downloadReportBtn.addEventListener("click", () => {
            window.print();
        });
    } else {
        console.error("Download Report Button not found.");
    }
});

