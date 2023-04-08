### Deploying simple service in K8s
This needs a Container registry and GKE K8s cluster

## Build image
```
# Build simple service
docker build . -t gcr.io/demoneil/ccg-demo:latest
docker push gcr.io/demoneil/ccg-demo:latest
```

## Deploy and Expose
```
# Build simple service
kubectl apply -f super-simple-svc.yaml
kubectl apply -f super-simple-svc-service.yaml
```

## Build and Deploy Frontend
```
docker build -f frontend.Dockerfile . -t gcr.io/demoneil/ccg-demo-frontend:latest
docker push gcr.io/demoneil/ccg-demo-frontend:latest

```

## Add config map
```
kubectl apply -f frontend/shared-configmap.yaml 
## Uncomment share environment variables
## Uncomment code to access shared environment variable
```
