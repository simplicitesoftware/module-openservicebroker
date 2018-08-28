![](https://www.simplicite.io/resources//logos/logo250.png)
* * *

`OpenServiceBroker` module definition
=====================================

Open Service Broker implementation for Simplicité(R)

`OSBPlan` business object definition
------------------------------------

Plan

### Fields

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |
| `osbPlnSrvId` link to **`OSBService`**                       | id                                       | *   | x   | -                                                                                |
| _Ref. `osbPlnSrvId.osbSrvName`_                              | _char(100)_                              |     |     | _Service name_                                                                   |
| `osbPlnName`                                                 | char(100)                                | *   | x   | Plan name                                                                        |
| `osbPlnShortDescription`                                     | char(100)                                |     | x   | Plan short description                                                           |
| `osbPlnUUID`                                                 | char(50)                                 |     |     | Plan UUID                                                                        |
| `osbPlnLongDescription`                                      | html(1000000)                            |     | x   | Plan long description                                                            |
| `osbPlnFree`                                                 | boolean                                  |     | x   | Is plan free?                                                                    |
| `osbPlnActive`                                               | boolean                                  |     | x   | Plan active?                                                                     |

### Custom actions

No custom action

`OSBService` business object definition
---------------------------------------

Service

### Fields

| Name                                                         | Type                                     | Req | Upd | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | --- | --- | -------------------------------------------------------------------------------- |
| `osbSrvName`                                                 | char(100)                                | x*  | x   | Service name                                                                     |
| `osbSrvUUID`                                                 | char(50)                                 |     |     | Service UUID                                                                     |
| `osbSrvShortDescription`                                     | char(100)                                |     | x   | Service short description                                                        |
| `osbSrvLongDescription`                                      | html(1000000)                            |     | x   | Service long description                                                         |
| `osbSrvBindable`                                             | boolean                                  |     | x   | Bindable service?                                                                |
| `osbSrvPlanUpdatable`                                        | boolean                                  |     | x   | Plan updatable?                                                                  |
| `osbSrvDocumentationURL`                                     | url(100)                                 |     | x   | Service documentation UR                                                         |
| `osbSrvInstructionsURL`                                      | url(100)                                 |     | x   | Service instructions URL                                                         |
| `osbSrvSupportURL`                                           | url(100)                                 |     | x   | Service support URL                                                              |
| `osbSrvTermsURL`                                             | url(100)                                 |     | x   | Service terms URL                                                                |
| `osbSrvTags`                                                 | text(1000)                               |     | x   | Comma-separated list of tags for service                                         |
| `osbSrvActive`                                               | boolean                                  |     | x   | Service active?                                                                  |

### Custom actions

No custom action

`osb` external object definition
--------------------------------

Open Service Broker services

```yaml
openapi: 3.0.0
servers:
  - [URL]/api/ext/osb
```

