// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import decode from '../src/decode.js';
import { checkErrors } from './utils.js';
import jws from '../src/jws.js'
import Context from '../src/context.js';
import { JWS } from '../src/types.js';


const validCjws = 'eyJ6aXAiOiJERUYiLCJhbGciOiJFUzI1NiIsImtpZCI6IjNLZmRnLVh3UC03Z1h5eXd0VWZVQUR3QnVtRE9QS01ReC1pRUxMMTFXOXMifQ.3ZJNj9MwEIb_ymq4pokTSktzo0XiSyAQy15QD64zbYz8EfkjalnlvzN2u2JBu3viRG6TmXn8vq99C9J7aKEPYfBtVfkBRek1d6FHrkJfCu46X-GR60Ghr2g6ooMCzG4Pbb2YL9jL56xhZT2vCxgFtLcQTgNC-_0382_cs3MxSwWhHp-TWkcjf_IgrXlyUNhRdvUKtgUIhx2aILn6Gnc_UIQkad9Ld4POJ04L85L0Ei_9XUfTKUwzDr2NTuB1lg-XRnGxA8IqRbSzEjrAncgjkaNS35yigbv9ltHAXfEA-DPZof2UIdd4hnAtFfHglaEZ5_MZBzmiSTm-t32q1yVsJzK4k2T-NQ-JVa9e1DNWzxoG01Q8qKZ-Ws27PyP2gYfos9104QHTBY1cCGlwY7tMELaT5pCF-5MPqC_vh26mV8vSukOVkq287CoxHgkg8iY0bAnTdipguESQ5ezRoUna7idIQ1aI6HIrmb2W-oxosmGWbFFUe-s0vcekhYtgXUJ20g-K5zjXm6s3aNBxdfXW-kEGrigoClHZ8CnqXVoFlr_60QSb_zLBZvWvE1ymBoUITnb08-OH0-bYL4dF_EKNXw.qIxp8j32EzRItn7hHrIfFKX163qlyYMMQ30fkYjOwl0Cgy5ssR9Oypas-KK-3AUFygu7mDrQmBGMiw44wgUqug';


test('decode-compact-valid-shc', async () => {
    const result = await decode(validCjws);
    const context = new Context();
    context.jws = result.jws as JWS;
    jws.validate(context);
    checkErrors(context);
});
