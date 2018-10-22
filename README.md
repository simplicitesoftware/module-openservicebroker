![](https://www.simplicite.io/resources//logos/logo250.png)
* * *

`OpenServiceBroker` module definition
=====================================

OpenServiceBroker (OSB) implementation for Simplicité(R).

OSB resources:

- [OpenServiceBroker specs](https://github.com/openservicebrokerapi/servicebroker/blob/v2.12/spec.md)
- [OpenServiceBroker OpenAPI schema](https://raw.githubusercontent.com/openservicebrokerapi/servicebroker/master/openapi.yaml)
- [IBM examples](https://github.com/IBM/sample-resource-service-brokers)

`OSBPlan` business object definition
------------------------------------

Plan

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `osbPlnSrvId` link to **`OSBService`**                       | id                                       | *        | yes       |          | -                                                                                |
| _Ref. `osbPlnSrvId.osbSrvName`_                              | _char(100)_                              |          |           |          | _Service name_                                                                   |
| `osbPlnName`                                                 | char(100)                                | *        | yes       |          | Plan name                                                                        |
| `osbPlnShortDescription`                                     | char(100)                                |          | yes       |          | Plan short description                                                           |
| `osbPlnUUID`                                                 | char(50)                                 |          |           |          | Plan UUID                                                                        |
| `osbPlnLongDescription`                                      | html(1000000)                            |          | yes       |          | Plan long description                                                            |
| `osbPlnFree`                                                 | boolean                                  |          | yes       |          | Is plan free?                                                                    |
| `osbPlnActive`                                               | boolean                                  |          | yes       |          | Plan active?                                                                     |

### Custom actions

No custom action

`OSBService` business object definition
---------------------------------------

Service

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `osbSrvName`                                                 | char(100)                                | yes*     | yes       |          | Service name                                                                     |
| `osbSrvUUID`                                                 | char(50)                                 |          |           |          | Service UUID                                                                     |
| `osbSrvShortDescription`                                     | char(100)                                |          | yes       |          | Service short description                                                        |
| `osbSrvLongDescription`                                      | html(1000000)                            |          | yes       |          | Service long description                                                         |
| `osbSrvBindable`                                             | boolean                                  |          | yes       |          | Bindable service?                                                                |
| `osbSrvPlanUpdatable`                                        | boolean                                  |          | yes       |          | Plan updatable?                                                                  |
| `osbSrvDocumentationURL`                                     | url(100)                                 |          | yes       |          | Service documentation UR                                                         |
| `osbSrvInstructionsURL`                                      | url(100)                                 |          | yes       |          | Service instructions URL                                                         |
| `osbSrvSupportURL`                                           | url(100)                                 |          | yes       |          | Service support URL                                                              |
| `osbSrvTermsURL`                                             | url(100)                                 |          | yes       |          | Service terms URL                                                                |
| `osbSrvTags`                                                 | text(1000)                               |          | yes       |          | Comma-separated list of tags for service                                         |
| `osbSrvActive`                                               | boolean                                  |          | yes       |          | Service active?                                                                  |

### Custom actions

No custom action

`osb` external object definition
--------------------------------

Open Service Broker services.

- URL: `<base URL>/api/ext/osb/v2` (using basic authentication)
- Services:
	- `GET /catalog`: get product catalog


