/*
Copyright 2015, 2016 OpenMarket Ltd
Copyright 2019 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to 
*/

import * as React from "react";
import SdkConfig from "matrix-react-sdk/src/SdkConfig";

export default class VectorAuthHeaderLogo extends React.PureComponent {
    public render(): React.ReactElement {
        const brandingConfig = SdkConfig.getObject("branding");
        const logoUrl = brandingConfig?.get("auth_header_logo_url") ?? "themes/element/img/logos/element-logo.svg";

        return (
            <aside className="mx_AuthHeaderLogo">
                <img src={logoUrl} alt="Element" />
            </aside>
        );
    }
}
