const DEGEN_ICON = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFE0lEQVR4XuWb7WscRRzH89YX/g0KWtP0CbVokbYEH2i1zdXaxFaCT7U2Dc3NXqJVsC8EUbFQEKRNbJK2ud3bKhQELSqCiBRR36hQKOIbQV8UikhBW6m9291xfxv3evf9bS67O7N3t8kXPi/udmZ+DzuzMzu729PTJp0x5IqK4Z2rGO5Vy3BlBRGutIRzvWI458sTN1Zj/dzJNmoPW8KtsUCT45nCGcL2u1KWkP3+WcQAtBH0nKKzA+12XL5zh9DZzBHuMfSj7bKFXEVjlznXRuxibSP61Rb5xnWMbz0I10P/MtOpV+WtzIEu4YOiXIn+apWf6bfRaLdhCncW/dYiNNTN+NOvRP+VhAbyAsaRSthovnDUkuAvPN7ijeYLq+hOY1yxdHZC3oKN5ZXyhEx+b4GN5B2Mr6X8Ci42sBTAOCN1ZkzehhWXDEJuxniZWKUEWP5V1y550jY8ObXvijxc+FG+vPVb+fR9Z+XgunKdnatPykLfCTmw8v06hb7p4P/Gcnsf+Dio/97zl+Xs6LWgbdW7TYy3SXbJPYgVkrC9d7IpqCzY3jvF7Cai5J7AuOuieZNViMmhR79jzmYF9R60nwSMO1DZqK7HgkkQD33FHM0K1QTYRWcPxq809omjw78xR7NieP2HzH5SMH7lBNCFCh3Niv2bPmX2k9Ic/Ji8FwskxRQ15mhWvL7zArOfmJLzbD0B/tTyLyuQEJr60NGsoOGG9tNwswdEHEwKzdHoaFZQb0P7adCaAAIdzQrVxVBIEHxZyDvwQFrQ0ayg3oa202CK6v09pnCP4IG0oKNZgXbTYgv3InX/S3ggLdvasBQm0G5aaChpG//EtrvylQBCawLoRgWd1Y3yzRCgNQFPrDnFHNYN9TK0q4LWBDy34SPmsG7oOoN2VdCaAOLIU78GmxvouCq01/DawA/BihNtqqCUgB1+oLTbg/838ubQL0FCqOvGuUZQmfBiajzytTSL0as+uoKPPfhlcGs8e+AqOx6XHjPlNIiOv/LY96xMa7z57bP/t9D48YV595lLLJkpV4cePfx4J+JAS46/8CdLgO6rcyvQNrFv4zlWbjGChVCapbBZrDIH2pmAqPXGyObPWbnFsErVDalvhtABAstkRdTm60LXilYo3Q3iGCSy7gU0zvfcY2uzW09A2g0RdCR05ujw76ysKnNjNxa816DtOCwfh5s9YLyaakvscOEn5kwIjdOZkb9ZnaTQWce2G9m15jSrE4vGLbEgCVggJvs3fcacaoR6xNA6U06P/CVp6oszXZ0c/SdYVUYNs+a2J2O1F0VT8CoJIAceXzXDnItifpFzXA6unZOj/V/Il7Z8E0DPFOg/OrZY0CGqS2KMX3ln+I3Bn5mTWUFzftozP4+zG+MPxAsm54A/H8c9i0mgNumBadJVYxQYd12qD0eb8YLFyUJX7jhQ0LvvrsiyPwOonfEGWj0cJak8IG0FrfmnXrwSPO4OH38P9M4HuWvt6eA3HTu29w9tm55RYLxMc+Pydqy0ZIjzggTJ727L9xWZUFg572B8i2opvSZHr/VjfLG0rF+UDIUN5gvFV2VD8YbzAcahJGy8q9H9unyoPHww4U/hM+i3Vi3rT2YaVemij6b8s96+j6YaZY3Lvs5/Nic789lcoyqd+HDScCfRj47LErV+emE6wllt+N29gHa7Uto+nhauZxWdJ7H93KlyUN5pCucT/wxeY0HWg3WuV4rO+dRr9xT6DzDs5dJUG7snAAAAAElFTkSuQmCC`;
const OP_ICON = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAMLklEQVR4XuVbWWyU1xUe7FlsKBSTQCjBuw22IWUrFBpII9RGTZUoSlWpUh/63kWqqqpKX9qXpgqRWqkqal9bqU3TSlXUB6SERc0CZU2DhAO0BWJoKNjYBnuWf+Zfv57v3H82ewzjsQHbufLxjD137n/OuWc/90YwWyMIANdBFp68BpC/4Lg+kBoD/nsNh7ftwY3lfUhHe5FJrMd4rB1B3EBK3mcbemBF+zC6bAPe2r4HuHYVSKfguYDPxWRNm2s7jvzNf8zOiEz8R83DF0xzgh/f37qFU7uexfjiLqCuDahvEeiAH+2Uv/m+Fa4QjXp+1gZHmIBoa/hZp8zr0Dmoa0eycR1O73wWGBxCxgn0GfqsWRozZkAAn7/4Gzh3EfbiTrgJISzeLYQIAxaRGBKbJ6xDiQ2iLfBjbQp8bwg2n3uxTvmfvF8kr/XrZL6sGWsRKZF1PryYfzAoZzOVhdoYQEnUFwc5oXzkZz+HvbQHmZjZ6SBKomYfuHYqIYxo7IK3/7eghrmCg0qdNwHHKkdtDLD5kwUOHIEbaUYQ405zl9onIT370K7PQkwkhSr01tvcBsWpllE1A9zAhxeI7jk+0n4KN5ZuDsX34QJxuPHpLbCQUUNJHL1pKEbVDIAYIJcyd/KyGLduEcdm0dUHseN3B+JAXJKNgtOpK7Bt2aQ0LWV1o2oGuFz49SPwVxhL7sVoyB4+A4gDcSFOuaUtiuM0BKAKBmRpXzz0r98BK7YWbrylAhJzA4hbVnD8cN0ONdDE/V7jngwg8VcWb0BOXJtHt1bfNenBcwWIG3EkrsSZuN9rVGSAflFEPvB9nO3YJgvO3V2fCsiEDzq2IPBEH2xfbHdlZlRkAKMa+nfqkxUTYxdlYDL5IXMZKAnJRauFhkPISegcTBE9VmaAJ9w6MyBBxyrRq7VzWuynAuJMm5CKCxOOX0JgVyMBnCO2Yzh9y7iVuvkn+hOBNJCWoeSgCZYm8KGMAQwp004Sg03bQj9PVzd50fkE6iKFlpvLtyptGjaXjAID6DotfnzoqEZXJsiZC35+psA4oV1pwsF3lcbSMKFEAgIVASdx/5KZhw2agqstLLKgTAUyv94vqefCZQDT6tFX95VFipFAXITvO2ocbBo+5uAVvrwQAHWdcEgjh7hFVpYiWmKiZTh3Ebdjj2Nh6H1lYGGGNOJsv1EFoT2Sk6iH3iHFigzLVrOY4nrhWix78dWvMOdBAp9PGq14F5NbLaVElBMjI8hFZ9/n52t+CuHfE+c8DLAlusXIsEpBhBXXdzbvBe5Dbk+OUwrcOC3w5M8fFlAVjm75ktg+YQBFgZVXFh8nTpwO+BJw2PF22Et7MVz3GK6tkZT0d38GRkeAO+MCo8Cxk7jWtAlY0g2XiCxqRzbRCb+eBRYyqxMDz30L//nej3D5uy/ho+/8WGHg23l4Ce9t3I2RxT0iUe1whLHZhsm43BOEVtJM2iPIZLT8PFPrz/L3yGJ5fe0AclqyZcWWQYclOpZRS+PR2mQ9jMmMC61PItsoz40Y20NJSSW6kRXrzJme1plFRgOx0LTSBJbkZNsotVoCfPkX8BumH61qTZE0C+0RXLkClqRZhp44sRrI67XV2AL8/k+mP0LEfdYjbGEB67a+GpyAvpY+mHTJy0BinTJAjdOiNlx6pA9ZwzslFAFZyfIWyTWBPNnJZRjUBrJ3Z9qeVOZNK2xnaZ5GX2iPsGPDenxQX5sE2OwBiE71r9pm6ggOexeOEqm9glHBcnBUmJ2elIggOyx5e4eswZp/M04+8eXCR3bgyTryhVRWEhSCFTZffNMbES7ZbBvJ586iFlmjeRJuUwHjAdJ8RGiPDDZtCPP96UsA5MFcaKRBOOoIgtw+W4i32MbK4NLKDQi0V/A40o0yPzlWJF6plKkJfh7C9TvFzygFafm7/jPwJK3VcpfoO613PrNnEEeeBrE10yrQskHDLtVQ00ZEktEe05KiFFSYfDfwqLt13Tj/ha8V8LZIlWz99ZWfLc4T5DxxsydWPlGYp4MBaEOvGNAWJQLZklyNlP31sLEP2lJrRVaMHo7/Q3sSaXmIywf5HpzoGpHg7kn4TQXanRKa03U9iKTjbD21hnZg8uS7ASKmOgw7U0Tc4tZZgmxxParI+JJWnFi1pTgPhkZ2eWgD7HhHmKiYQTG/+tjn9fs+kxjxGIFIye2R62aaEG47vvEy4knoVSbiNxWo/gvNGaE9kombjg5FcOLEe4MwoH61wTYcKQHnh6/AKnFPPrs5soP425vFiRyB+IZEqzZH+1f3geW7wmDLbQndIxnJ3Zc5e58xz3JpYGVCMof+rc8LA3qEgdXbAOLNZ2aEcREkaBHzTcrpAdVmeMnGEqyhujvQtFn0tchQRoG2MBqpwfK5lrArulZiAWHQH/5iLHx+iCalR1OmSkMBo+8rETSXPkW8BCLVi34eCrQK7TNjgHxv+Ps/hUWXlR/y1qsz7e/ivHZxk51qI8vGq79BqlGez66vPR66jXCQYMq6y46Xp43Q0sLu7ZGbGFwhNmVJzyS87gVlDEiK7hlkp68CiKwVa5cWqSwqL+OWXLRP9bYwT2Cgsa/gzsdlW/n24+V98ux1yFCNsr72MVSbvJy4QSjRjAmCIIvAy0oMlTWp/OVbGIuxWFtrglWiAkltdrSGPfuJE+8O2vfXqKVka66LUYr3qKvJz9NA57U3dFM1VvB8Ex9Gu9XC31jRp7aDfQhWpB3PwcFnvo7jT7+Ik198Ecf2Po8Tm3bj34/2wtaDFvJcqlTNkmvoVSOYqg/dYC19/Vi37CR9cYn7EsPkSqxdyoBMQxe4d56JEZF15fe/PkZOvIjV2Ipj3btNaMstp0eR5dQrhN7Ji1FNSTCBBttsltb5asgw824wU98rgdCKjRoUlCJcLehCnsZlRfozFk53P4XbYt3HI2040y6RpmOrcaSsOCIGQcpGeoW4RIkhPJmHq6Pkiuq9TfPmOmUqNNtAhhYCIYaDuvs1hMJZic4ubNiFIF2iAmKw8nkMX4OAu1qUEP33T34pIkwkupCUHaSRU6XPy9L58zXqdpWgktSBt3c8PbNkCBGWnMWAjUp+J4SqHPAX+UF95k9ozPUgC5lx9n1NY4lANr5e02GVooBS4qj4n2rddV8lQM8f5ZOhGaXDEjzZNKKNvcAf39CkVwc302UeZ8ptvm9eB7/5AwSSiOQk8cmq++3C1WWMI0J/RwYI8248ysbM9I1ytVCWDs+sIELGmaqPVb8GvhB3M9GHf3buxLEXvoFjT72A86s3waKk8ABDgg2K1rAGwAiwA2ORZiSXdBXAadgkyN3n4mxpQYQi+t7WvcYOTJy4QIG9jxPbv0JvzKKocGB4BDYzsgqTFyK4LIoOD6u9ibDokAuYlxvDVEtgMV/AxA1ifBPdsFzaJS2Lu8Zqf9C/4BsjpE0bI/0XTVjOxgj9FEsLNOA5idhq8gbzBEibxQiTo9Aayw9Rg7F9+8RATD+9nC/A06X2r/YbNx2OAgMoB5qJ1S1gFRAGaIZZwoGiBICBmijGkXfVWJgUeSEwo+SAxJGjYJG+RADKGcA4nMdIhh7ZDh4rcUvqevMV8kdkeOznrkdkdNAbyIzB5KA5D7yADknx4FfYWykb5QzIDx6TO3Fpnh+T6zDH5IQGvH/V0FRhVGYAXSLzmnl9ULITKckp8PpBPSipmWiFUZEBC+WoLHFnqYGiX3n/p2BA6fhEHpYuG5/04/KFQecpNkEvJcyxCxN014pTU4fiqJc7qhzVMyCdM9dRTl2Zu1dmTn9krvWw0lHlqJoBvIjkU6fcAJkgjZvLtsyJ1JnVKF7gumONsuSsl6Z4wavaUTUDyobNH1GwN/8Ol01P1u3Da3PsAk1EcrbAMNzUL/nMHDtTBw7jgVybKxueCZsZV1PieInR/tR6ZMQI3c/SGtceb2iBv7QXoy+/8hAvToaDmqaZVRC2Rvovwkp0wmb8zQSkyquzKLk6qyVrHmHhvPzV2TjXbEausQc4d6HwcD67em2vPGbEgLIRXp5Os8I0NIRTu56r6fK0ztHWFf82l6dP7vwqcGvI7DRFnafFZmnMHgMK1+dVLnVnXJ54SI/rVfj89flMrA9WQ0/Z9fmkvOf/eLX+fzLn0Of2yHeuAamkLBmE1+fp1oUFrl3aiZvx+D/IhYapFY/COQAAAABJRU5ErkJggg==`;
const PRIME_ICON = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC2klEQVR4Xt2ZsYoVMRSGT2Elop27lYjYKLiFoGChYGNnISgK+wRa+gC+gA+gjb1sL2gtYqtobSOCpbaCqNk7uZ79ktxMbjJJZn74qvw55/+HW8xwRerp7JefN/+M4c79nQe8PDu9ONj7xWI5cH63YvDScF8vGv3zLsXBm8sfGKKJGKw2zFNNDNIa5ptUXN4LzFlc9/Z3n3BpjzB3EXFJ7zB/ljh8LrDHVuLQucE+SXr4+MxLDpwj7DVaHDRX2GuUOGTusN9G8fJSYM+geHEpsKdXvNSaf5FKE9a588cfMUBLxA1fgh8SEgO0RNzgJfGLIVohbuDSuGKIVogbdiqOikFaMATzcvLUMcefg6ou8vbzNcdQGxbWXLx0wvGXYP0AeFAbFq5R3tDFA2DhWHl6MlmJS2rhCbSmQnmDyK3bp59zUQ08Ydbc3d9N8mfBRTVwQiiqljdw2dQ4ARTVyxu4cEqc5Yom5Q1cOhXOYsXTZxeS/CVfiqo8ABbopbxh8gfAAj2VN0z6AFhA8+rdlSS/rzw9W8GhpXAWKbopb+DgEjhLFKnlJ38j5PBcnAWK7sobXr+/+p1LtsUZrvj49XqSv0r5FWU+hjyD19QoT/8YxIoHqTCMJrX8Nm+E9I9FrHiQAsNoei4/zF6JB2NhmFgwejS1yw/z/4uHMRhGQ2/M37y8EQ2bMAFC0BvztyhvEJ9o8iGeQBZ6Y/7Ub4HQjlQkJBqJeAJZ6I35W5U3SEifvt34TbO6FITemL9leYNsEs3DhSD0xvxdl7fChSAcHvOnfguEdmyLjJW6EITDY/7W5Q2SKCeQhYOH4UHmWN5qVDB6NHMubxQNRo8m9VsgtCMXyVQwmD3zsZTyh+LQYXCQRZW3wuAgiyxvNQwOsujy0Kgi9BD6c1lFq6eNRfS5D/pzsaGqi0GGMEF8f3LkoKK0EwIFWWR5j5zihlLlj2zqXEXLc/jsxEIxeH8q/QVo1KA/eBbmQQAAAABJRU5ErkJggg==`;
const ETH_ICON = `data:image/png;base64,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`;
const BORED_ICON = `data:image/png;base64,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`;
const CELO_ICON = `data:image/png;base64,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`;

export const SUPPORTED_ICONS = [
  'PRIME',
  'OP',
  'DEGEN',
  'ETH',
  'BORED',
  'CELO',
] as const;

export type SupportedIcon = (typeof SUPPORTED_ICONS)[number];

export const TOKEN_SYMBOL_TO_ICON: Record<SupportedIcon, string> = {
  PRIME: PRIME_ICON,
  OP: OP_ICON,
  DEGEN: DEGEN_ICON,
  ETH: ETH_ICON,
  BORED: BORED_ICON,
  CELO: CELO_ICON,
};
