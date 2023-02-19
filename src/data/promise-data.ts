export const Promises = [
  {
    name: "Knative",
    description: "A service to deploy, run, and manage serverless, cloud-native applications",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/knative",
    logoUrl: '/img/marketplace/knative.svg',
    categories: [
      "App Delivery"
    ]
  },
  {
    name: "RabbitMQ",
    description: "A message broker that implements the Advanced Message Queuing Protocol (AMQP)",
    url: "https://github.com/syntasso/promise-rabbitmq",
    logoUrl: '/img/marketplace/rabbitmq.svg',
    categories: [
      "Messaging"
    ]
  },
  {
    name: "Redis",
    description: "A distributed, in-memory, key–value database, cache and message broker",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/redis",
    logoUrl: '/img/marketplace/redis.svg',
    categories: [
      "Data"
    ]
  },
  {
    name: "PostgreSQL",
    description: "A SQL-compliant relational database management system",
    url: "https://github.com/syntasso/promise-postgresql",
    logoUrl: '/img/marketplace/postgresql.svg',
    categories: [
      "Data"
    ]
  },
  {
    name: "Kubevela",
    description: "A modern software delivery and management control plane",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/kubevela",
    logoUrl: '/img/marketplace/kubevela.svg',
    categories: [
      "App Delivery"
    ]
  },
  {
    name: "Vault",
    description: "An identity-based secrets and encryption management system",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/vault",
    logoUrl: '/img/marketplace/vault.svg',
    categories: [
      "Credentials"
    ]
  },
  {
    name: "Jenkins",
    description: "A continuous integration/continuous delivery and deployment (CI/CD) automation software",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/jenkins",
    logoUrl: '/img/marketplace/jenkins.svg',
    categories: [
      "CI/CD"
    ]
  },
  {
    name: "ArgoCD",
    description: "A declarative continuous delivery tool",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/argocd-application",
    logoUrl: '/img/marketplace/argocd.svg',
    categories: [
      "CI/CD",
      "GitOps"
    ]
  },
  {
    name: "Grafana / Prometheus",
    description: "A service  with event monitoring and alerting using Prometheus, visualised in Grafana",
    url: "https://github.com/syntasso/promise-observability",
    logoUrl: '/img/marketplace/observability.svg',
    categories: [
      "Monitoring",
      "Metrics"
    ]
  },
  {
    name: "Kafka",
    description: "A distributed event store and stream-processing platform",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/kafka",
    logoUrl: '/img/marketplace/kafka.svg',
    categories: [
      "Messaging"
    ]
  },
  {
    name: "Istio",
    description: "A service mesh, for observability, traffic management, security, and policy",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/istio",
    logoUrl: '/img/marketplace/istio.svg',
    categories: [
      "Service Mesh"
    ]
  },
  {
    name: "ElasticSearch",
    description: "A distributed, open search and analytics engine for all types of data",
    url: "https://github.com/syntasso/promise-elasticcloud",
    logoUrl: '/img/marketplace/elasticsearch.svg',
    categories: [
      "Search"
    ]
  },
  {
    name: "Namespace",
    description: "A service that provides Kubernetes Namespaces as-a-Service",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/namespace",
    logoUrl: '/img/marketplace/ns.svg',
    categories: [
      "Kubernetes"
    ]
  },
  {
    name: 'NGINX Ingress Controller',
    description: 'An ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer',
    url: 'https://github.com/syntasso/kratix-marketplace/tree/main/nginx-ingress',
    logoUrl: '/img/marketplace/nginx.svg',
    categories: [
      'Networking'
    ],
  },
  {
    name: 'Dex',
    description: 'A demo Promise with cluster authentication and authorization using OIDC as a service',
    url: 'https://github.com/syntasso/kratix-marketplace/tree/main/dex-group-authentication',
    logoUrl: '/img/marketplace/dex.svg',
    categories: [
      'Security'
    ]
  },
  {
    name: "Slack",
    description: "A demo Promise with an API integration in the Promise pipeline: send messages via the Slack API",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/slack",
    logoUrl: '/img/marketplace/slack.svg',
    categories: [
      "Communication"
    ]
  },
  {
    name: "Crossplane",
    description: "A service to orchestrate infrastructure across clouds",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/crossplane",
    logoUrl: '/img/marketplace/crossplane.svg',
    categories: [
      "Infrastructure Provisioning"
    ]
  },
  {
    name: "Waypoint",
    description: "An open source solution that provides a modern workflow for build, deploy, and release",
    url: "https://github.com/syntasso/promise-waypoint/tree/main",
    logoUrl: '/img/marketplace/waypoint.svg',
    categories: [
      "App Delivery"
    ]
  },
  {
    name: "Kubeflow Pipelines",
    description: "A platform for building and deploying portable, scalable machine learning (ML) workflows based on Docker containers",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/kubeflow-pipelines",
    logoUrl: '/img/marketplace/kubeflow-pipelines.svg',
    categories: [
      "Machine Learning"
    ]
  },
  {
    name: "cert-manager",
    description: "A manager for certificates and certificate issuers as resource types in Kubernetes clusters",
    url: "https://github.com/syntasso/kratix-marketplace/tree/main/cert-manager",
    logoUrl: '/img/marketplace/cert-manager.svg',
    categories: [
      "Security"
    ]
  },
  {
    name: "Paved Path",
    description: "A 'Paved Path' service with Knative and PostgreSQL. \
      Check the Compound Promises docs for more information.",
    url: "https://github.com/syntasso/kratix/tree/main/samples/paved-path-demo/",
    logoUrl: '/img/marketplace/pavedpath.svg',
    example: true,
    categories: [
      "Example", "Compound Promise"
    ]
  },
  {
    name: "App-as-a-Service",
    description: "An example Promise delivering 'App-as-a-Service'. \
      Check the Compound Promises docs for more information.",
    url: "https://github.com/syntasso/kratix/tree/main/demo/app-as-a-service",
    logoUrl: '/img/marketplace/app-as-a-service.svg',
    example: true,
    categories: [
      "Example", "Compound Promise"
    ]
  },
  {
    name: "MongoDB",
    description: "A document-oriented NoSQL database",
    logoUrl: '/img/marketplace/mongodb.svg',
    available: false,
    categories: [
      "Data"
    ]
  },
];
