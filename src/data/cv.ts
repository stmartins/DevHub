import type { Localized } from "../i18n/language";

// Généré depuis resumme-builder-fork/data/build_cv.py — même contenu que les
// PDF de public/cv/. Mettre à jour les deux ensemble.

export type CvVersion = "short" | "long";

export type Experience = {
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  position: Localized;
  summary: Localized;
  highlights: Record<CvVersion, { fr: string[]; en: string[] }>;
};

export const experiences: Experience[] = [
  {
    "company": "Figaro Classifieds",
    "location": "Paris",
    "startDate": "2023-05",
    "endDate": null,
    "position": {
      "fr": "Développeur Full Stack",
      "en": "Full Stack Developer"
    },
    "summary": {
      "fr": "Développement et évolution de Cadremploi.fr au sein d’une équipe produit, sur une plateforme à fort trafic (1,5 M de visites mensuelles) et à fortes contraintes réglementaires (RGPD).",
      "en": "Building and evolving Cadremploi.fr, a French executive job board, within a product team: high-traffic platform (1.5M monthly visits) under strict regulatory constraints (GDPR)."
    },
    "highlights": {
      "short": {
        "fr": [
          "Refonte complète de Cadremploi.fr en Vue 3 / Nuxt 3 : 1ᵉʳ contributeur en commits, propriétaire des composants de détail d’offre et d’authentification, reconstruction de la page d’accueil.",
          "SEO technique sur les trois briques (Nuxt, API Go, monolithe Kotlin) : schema.org, maillage interne, sitemap automatisé, ouverture de la nouvelle taxonomie à 100 % avec plan de redirections 301.",
          "API de compliance RGPD en Go, 1ᵉʳ contributeur en volume : suppression de comptes, rétention légale de 6 ans, et batch de réconciliation concurrent et idempotent ayant purgé 917 comptes orphelins.",
          "API de recherche Go en architecture hexagonale : 9 stratégies de recherche ElasticSearch avec fusion et dédoublonnage, module de 8 labels métier.",
          "Consolidation de 2 microservices en une API unique (~15 000 lignes reprises) et 92 versions en production du monolithe Kotlin / Oracle. GCP, Kubernetes, Terraform."
        ],
        "en": [
          "Full rebuild of Cadremploi.fr in Vue 3 / Nuxt 3: #1 contributor by commits, owner of the job detail and authentication components, rebuilt the homepage.",
          "Technical SEO across all three layers (Nuxt, Go API, Kotlin monolith): schema.org, internal linking, automated sitemap, 100% rollout of the new taxonomy with a 301 redirect plan.",
          "GDPR compliance API in Go, top contributor by volume: account deletion, 6-year legal retention, and a concurrent, idempotent reconciliation batch that purged 917 orphaned accounts.",
          "Go search API in hexagonal architecture: 9 ElasticSearch search strategies with merging and deduplication, 8-badge business module.",
          "Merged 2 microservices into a single API (~15,000 lines migrated) and shipped 92 production releases of the Kotlin / Oracle monolith. GCP, Kubernetes, Terraform."
        ]
      },
      "long": {
        "fr": [
          "Refonte complète de Cadremploi.fr en Vue 3 / Nuxt 3, rejointe dès sa première semaine : 1ᵉʳ contributeur du projet en nombre de commits et 2ᵉ en volume de code (+21 800 lignes hors fichiers générés, 140 tickets livrés), premier propriétaire des composants de détail d’offre et d’authentification, auteur du parcours d’inscription, des pages de listes SEO et de 2 des 7 suites de tests end-to-end Playwright.",
          "Reconstruction de la page d’accueil sur la nouvelle stack : refactor de la HomePage côté API Go avec alignement du client CCM sur le legacy, balises title / description et données structurées, et nouveaux blocs éditoriaux (« Découvrez les métiers qui recrutent », bandeau de campagne).",
          "SEO technique sur les trois briques de la plateforme : composable de données structurées schema.org (JobPosting, fil d’Ariane) et composants de maillage interne côté Nuxt ; packages SEO des pages liste et détail et sitemap de taxonomie automatisé côté API Go ; hubs SEO régions, départements et localités côté monolithe Kotlin. En septembre 2026, ouverture de la nouvelle taxonomie à 100 % (catégories et métiers) avec suppression du code legacy (−900 lignes), plan de redirections 301 et enrichissement du datalayer GA4.",
          "Premier contributeur en volume de l’API de compliance RGPD en Go (44 % des lignes du service) : intégration du désabonnement newsletters via le CRM, 4 des 13 connecteurs de suppression (CRM, référentiel internautes, ElasticSearch, passerelle RTP), export des données personnelles, et rétention réglementaire de 6 ans avec mails d’avertissement échelonnés et 3 des 4 CronJobs Kubernetes du service.",
          "Conception d’un batch de réconciliation des internautes orphelins, écrit intégralement : suppression idempotente en trois étapes fail-fast, concurrence bornée par sémaphore, garde-fou mémoire de 50 000 entrées, requête de détection ramenée d’un appel par lot à un seul appel par exécution. 917 comptes orphelins purgés dès la mise en production, puis exécution quotidienne surveillée (Datadog, Slack).",
          "Développement au sein de l’architecture hexagonale de l’API de recherche en Go, dont je suis le premier propriétaire du domaine métier (43 % des lignes) : composition de 9 stratégies de recherche (exacte, géographique, élargie et variantes) au-dessus d’ElasticSearch avec fusion applicative et dédoublonnage, et conception du module de 8 labels métier à seuils (« recruteur actif », « postulez le premier »…) appuyé sur des maps en mémoire et des appels batch.",
          "Consolidation de 2 microservices en une API unique pour l’espace recruteurs Figaro Emploi (Go / Gin, ~15 000 lignes reprises) : sécurisation Swagger, reprise des migrations, décommissionnement des anciens backends et bascule de leurs routes sur la gateway KrakenD, avec écriture du module Terraform (réseau, Cloud SQL, Kubernetes) en staging et production.",
          "Développement Kotlin sur le monolithe Cadremploi (Spring, Spring Batch, Hibernate, Oracle, JSP) en parallèle de la refonte : 171 fichiers Kotlin sur 4 modules Maven, 92 versions livrées en production entre 2024 et 2026, résolution d’un incident de saturation des sessions Oracle (verrou applicatif non bloquant DBMS_LOCK), et mise en conformité CNIL de l’authentification persistante.",
          "Évolution des flux d’offres partenaires APEC et France Travail avec enrichissement des référentiels INSEE, et développement de la candidature en masse de bout en bout (API, Pub/Sub, service d’envoi, mails de confirmation) ; réduction de dette technique par le décommissionnement complet de la newsletter (73 fichiers, −1 677 lignes).",
          "Initiateur du projet Terraform du service de compliance (75 % des lignes) et du module initial du nouveau frontend ; déploiement sur GCP (Kubernetes, Helm, Docker), tests d’intégration sur ElasticSearch réel via testcontainers.",
          "Participation active aux choix d’architecture, avec une forte autonomie, une pratique régulière du peer programming et des revues de code."
        ],
        "en": [
          "Full rebuild of Cadremploi.fr in Vue 3 / Nuxt 3, joined in its first week: #1 contributor by commits and #2 by code volume (+21,800 lines excluding generated files, 140 tickets delivered), original owner of the job detail and authentication components, author of the sign-up flow, the SEO listing pages and 2 of the 7 Playwright end-to-end test suites.",
          "Homepage rebuild on the new stack: HomePage refactor in the Go API with the CMS client aligned on legacy behavior, title / description tags and structured data, and new editorial blocks (“Discover the jobs that are hiring”, campaign banner).",
          "Technical SEO across all three layers of the platform: schema.org structured data composable (JobPosting, breadcrumbs) and internal linking components in Nuxt; SEO packages for listing and detail pages and an automated taxonomy sitemap in the Go API; region, department and city SEO hubs in the Kotlin monolith. In September 2026, rolled the new taxonomy out to 100% (categories and occupations), removing the legacy code (−900 lines), with a 301 redirect plan and an enriched GA4 data layer.",
          "Top contributor by volume to the GDPR compliance API in Go (44% of the service’s lines): newsletter unsubscription through the CRM, 4 of the 13 account-deletion connectors (CRM, user registry, ElasticSearch, RTP gateway), personal data export, and 6-year legal retention with staged warning emails and 3 of the service’s 4 Kubernetes CronJobs.",
          "Designed and wrote an orphaned-account reconciliation batch end to end: idempotent three-step fail-fast deletion, semaphore-bounded concurrency, a 50,000-entry memory guard, and an expensive detection query cut from one call per batch to one call per run. 917 orphaned accounts purged on first production run, then monitored daily runs (Datadog, Slack).",
          "Development within the hexagonal architecture of the Go search API, where I am the top owner of the business domain (43% of lines): composed 9 search strategies (exact, geographic, broadened and variants) on top of ElasticSearch with application-side merging and deduplication, and designed the 8 threshold-based business badges module (“active recruiter”, “be the first to apply”…) backed by in-memory maps and batch calls.",
          "Merged 2 microservices into a single API for the Figaro Emploi recruiter space (Go / Gin, ~15,000 lines migrated): secured Swagger endpoints, took over DB migrations, decommissioned the old backends and switched their routes on the KrakenD gateway; wrote the Terraform module (network, Cloud SQL, Kubernetes) for staging and production.",
          "Kotlin development on the Cadremploi monolith (Spring, Spring Batch, Hibernate, Oracle, JSP) alongside the rebuild: 171 Kotlin files across 4 Maven modules, 92 production releases between 2024 and 2026, fixed an Oracle session saturation incident (non-blocking DBMS_LOCK application lock), and brought persistent login into CNIL compliance.",
          "Evolved the APEC and France Travail partner job feeds with INSEE reference data enrichment, and built bulk job applications end to end (API, Pub/Sub, sender service, confirmation emails); reduced technical debt by fully decommissioning the newsletter (73 files, −1,677 lines).",
          "Started the Terraform project of the compliance service (75% of its lines) and the new frontend’s initial module; deployments on GCP (Kubernetes, Helm, Docker), integration tests against a real ElasticSearch with testcontainers.",
          "Active part in architecture decisions, with strong autonomy, regular pair programming and code reviews."
        ]
      }
    }
  },
  {
    "company": "T2 Technology",
    "location": "Torcy",
    "startDate": "2020-01",
    "endDate": "2023-05",
    "position": {
      "fr": "Développeur Full Stack",
      "en": "Full Stack Developer"
    },
    "summary": {
      "fr": "Développement de solutions logicielles dans le domaine de l’imagerie médicale (PACS, impression d’examens, services en ligne) au sein d’une petite équipe agile.",
      "en": "Software development for medical imaging (PACS, exam printing, online services) in a small agile team."
    },
    "highlights": {
      "short": {
        "fr": [
          "Service Kotlin de transfert d’examens DICOM (interopérabilité DICOM / HL7, équipements multi-constructeurs) et API Go de mise à disposition sécurisée des examens.",
          "Solutions d’impression médicale en C++ et C# : performance et gestion mémoire sur des images volumineuses."
        ],
        "en": [
          "Kotlin DICOM exam transfer service (DICOM / HL7 interoperability, multi-vendor equipment) and a Go API for secure online exam access.",
          "Medical printing software in C++ and C#: performance and memory management on large images."
        ]
      },
      "long": {
        "fr": [
          "Co-conception d’un service Kotlin de transfert d’examens via le protocole DICOM, dans un environnement à forte contrainte d’interopérabilité : conformité aux standards DICOM et HL7 et tests entre équipements de constructeurs différents.",
          "Maintenance et évolution de solutions d’impression médicale en C++ et C#, avec un enjeu constant de performance et de gestion mémoire sur des images volumineuses.",
          "Co-conception d’une API Go de mise à disposition sécurisée des examens en ligne, incluant l’authentification et la gestion des rôles utilisateurs.",
          "Développement des interfaces web de consultation en HTML et JavaScript, dans une petite équipe où chacun portait ses sujets de bout en bout."
        ],
        "en": [
          "Co-designed a Kotlin exam transfer service over the DICOM protocol, in a strongly interoperability-driven environment: compliance with DICOM and HL7 standards and testing across equipment from different vendors.",
          "Maintained and evolved medical printing software in C++ and C#, with a constant focus on performance and memory management for large images.",
          "Co-designed a Go API for secure online access to medical exams, including authentication and user role management.",
          "Built the web viewing interfaces in HTML and JavaScript, in a small team where everyone owned their topics end to end."
        ]
      }
    }
  }
];

export const education = {
  school: "42 Paris",
  degree: {
    fr: "Architecte en Technologie Numérique (niveau Master)",
    en: "Digital Technology Architect (Master's level)",
  } satisfies Localized,
  startDate: "2015-11",
  endDate: "2020-03",
};

export function cvPdfUrl(version: CvVersion, language: "fr" | "en"): string {
  return `/cv/stephane-martins-cv-${version}-${language}.pdf`;
}
