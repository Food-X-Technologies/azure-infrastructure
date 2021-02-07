# Azure Infrastructure: ARM Templates
Robust production ready hardend templates, for real-world scenarios

## Testing
Install packages from NPM
```
npm install
```

Run test suite via:
```
npm test
```

# App Service
```
az deployment group create --template-file ./app-service/deploy.json -g ResourceGroup
```

# Storage Account
```
az deployment group create --template-file ./storage-account/deploy.json --parameters ./storage-account/test.params.json -g ResourceGroup
```