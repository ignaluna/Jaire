import React from 'react'

const Carousel = () => {
    return (
        <div className="slider accordion margin-auto relative width-screen grid place-items-center">
            <div className='flex inline-block scroll-animation'>
                <div className='slide'>
                    <img className='w-full h-full hover:translate-z-20' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///8bGRwAAAAZFxrz8/Pj4+P8/Pz5+fkPDBAWFBfv7+/09PSvr69LSUynp6eysrLPz8/h4eGgoKCpqamNjY2YmJjq6urExMQYGBjY2NiDg4N3d3e5ubnHx8eampoQEBBWVlYlJSUGAAiKiopAQEB7e3thYWFra2svLy9eXl5PT08dHR0nJSg4ODhDQ0MUFBQrKSwrLCuguYlHAAANYUlEQVR4nO2c6XaizBaGi82MRJBRBkVxwNl4/zd3dg3g0Ml30mmJ3WvV86cNItZr7ak2RRMikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJP8Y5oBivnoYvWDoZVRsl5f9fn85zYqo1I1XD+mpZNGuBrAsm2NZAPVblL16WM/C8N5QnaooFqpELFtBVFT55v77E4kKyiVYqAgFzRZDNwyi5h1lqlzksXz1CP8YZwsVnT6YpdcAM5jkAGwmK5g5LxzdE5hYtaKMzzAbPb7jztk8ovb0FQN7Fi6bqaoKmb0+EPFptGH6gpE9iRDYLCl+d2Qw8dJB+8fkQB1UUSB+yeieQMns0FauWUGLoyLKu+kcbYTE4CXj+2MyHjAhv8aSsnQN13Wvpxx45oDJKwb4pxinis3PynG73D4MIsNzb4wyZnasVHPtJWP8MyIYUxtdBmiCXszn0Vslie8NxRl6HPsrJnEMq9cN9Lvotk0VQkj0VUocdxE6mBCjwA0KlhhHbhQaJFvsbe6K/14Jl/M4+k7NL4s8jTieO43Xqyx1vWkwjUqNJGXk4VQzhdb21QP+XRKFzU3dxMNh6KVhsy6mwyhPE5cUTRwNS2cSlzo9kStUQH/1kH+TgA8cSlwNmo4+Go0mUzqdJgpJMKg2qyYMAyr+KMw0evWQf5Mty3T2sfTCqZv6kzRNJ6s2bZiRqNRMzdFFOLXnLxvrt0hE0dngayPBKdR1fbRoeE7QdpE7DKZxEHpBHIatmf5Suv7X9YfD/39Sr5TwQbFirIKFN8rLQhzFGdSwvjkIM/W+evFBuR6DKBsmy2bw32f3hIiQD+sGDz0Qp9T37442onTLv3htXHBWY+DX0KGC1ywxuRuOH7Jcxouz4L4V1dY1sy9f/VSNxzz04i/5mqLWeOMKq3vfSviUPiwlhCNWy69enDRw3vDyvaiVtqZNhsefbOJxhefzfZIbfagw5QrPm69fvare+KspwIn5odkA/Gg0/lhhyqf0QaHfKvxqW8q8nKHgL7Wm4V+hvVfVj5ZFXKFt3VtpwDU8OE72u3M4stRfnM+p1HrxraF+E65Qre8ijSHKlvC++dQqPH714hN4DNKoGo/9aIp8ExngLi+kofj3PlsIhdXpqxfHivCXpQhV/aPL6FbhXRbfpWSkk2Qwuc98wg+/7kZFrVaPYTMEFZJPP9FDkG0V3pbToYe5eRuEWHbfmWlb/wg38ps39raZeVE7MiNcvxWupvNCZmd1Reyk4L+hUdS2gv9oVGWadx0D08HkMlkEUdiTQlaXtuRJSbRilpBhdvd9Q6GQDz+GmleoBcBSRNfBDADoLYEd++toWzsiTgaaBEfRART1vdjNaWdyCMCvr0dbGpGy6XAals920jVXaL9dM0CWJh4JokWJsTS+rSXbCo96J6Y11bZYAmiqqk0JO6hWuWKP+TTrtlrnQqBibzS0UKCXYHdFfPTSsTAdD0s69NeCFFqux0+2VDFqVbn6xtB0vDLN9IhExL8NCrwuVStUrZ9gjEsupv9kiz6quYV5xgs0NhE+uhyb7ymebOFv6OXTvFZhNcqyzAhwVSMUBmDT7y9IE8+08sm9rrJdEl2lRDhUn5S6HudEu7UZvrawsWgzj7PUVqwZPWqgDp4ScmCRE0MuD800qNDLxnP8bWruB16rGuOs2raYC4vZ0AI1DrPoyXOo8/VhFz7wiEsSdJLCIWlDjBuFjjBSOqoUhSm876aDaGxMQBgnHki4YhY2g53pd0kwFvLTuZ8c2nrgZDP9SaERI3j2CsQ48UWf1Tli7JAmINrMIWV+V9bwznib4eigWZzwgLoYHWfFI48O9oFdbI0lDT1Bw3NaIyksnixMkySKmE6Cx2JaqOt5sXp+rly0ZipSs++RFc6hHyUkKjMSXP2Tu6H9zv/qBr22ePutBNGGy4BnTBpKxclRrdq8LMUE0q4sslqkYf2D0ueJZK1CbqZpgMkCZ84bJmRKQ01X1phiCoXd4i/DSj08zJfEO0sscQNhrYmltkmI6uI2YnfHmBWwT5TiUj1hzES+uFBT01GbTzAfBq42cAlOYlcKeOynUMHsBs2ME4fHZoLaJq8PdlUbSrubVRfbWrMXJoppC6WytYIF2nmfHY4umtJhTQckMkiZJGVAq1KU6re3Z3bWbfFjzG2+9MPDzMADqHlW9EF0Llxoi8GkGot7j8lN3T1sY+6y4lG5L8yTmETFIYOAZCUNL3rgknBADJyDgM9Myoz0vBfZSq/GLM/jUsE+UF+dtUZ6ErGENtO7qHQWgWYC1yI/Fu+PuszfF2WbMFY0wdN0FGMo1YmH0kqfOGwSRbujq9AnOCwaZ1d71WZzebZ5LJkeVPvCbA4jE/Bfx4VzxQMNpkirXWyvap5mYtTf8w30psv65WDILM4gjcYbbguHML+ZsnOgW1YMUSEOSz9PaxY6NLDYomoEcc1jqrm0VZuHlxzOF/6xvBaFEOHJxKHVw3n8Wy3Yb6BVPCfaVj5hlpaOjCYlLp0ALWe9DHYTdVwdutxRWGdqYqswqpmL6cBj5LwIoWaVgANidqkFt/25mXW9szOzWAGIcaDV3x8+CIkK9wctHAwD4jKXGw3RM/W5zXZqXFfEb7a9N4m+JLOKuZgPTGgOg5xLpmnI4rHHPNqto9V2F0pxWaOeTTR/LP/WfSsUWzGoRO4QCyPwNI/nBS8rF0fqhLfe4hxs2lQsUrK37RHRnZSthHxUsqXbUjKdVaCsUiEjW0X/xRUg2jIvhFhVg1a8R8+cLe2f6KQOW4n8Zv4k80LdFZkvmhzobXCrvimo6ASdSFSg36HC7FyWgKF1dLmY5N2GzNnkuMRQMbp6a54YfVKsuhZGSdfFzrutjkk2T7E89T8a05MpwRLhZhPrxBxq2yzjiWt0ourHsLktO1JcGeyXG1Zx2iecAwyS9nqOQ2U5fYk+2lRKvYhoCqEF3rA5jnjjZjHK93QOsSxVrNwa0jXWj3SIs6VYKdqgbIPcnHq45p7oJZadtDcDxd2yDRWO2aoVk55NVWC8UGtaSNMbqVBltBDHF8xHccE4hjX9fF5jOIMji1faxsYKaYseYr39hED0iwXUPDGqFliHzbFp3vDntVS2ce+h5M/AAmZbBYBF/3UAh04zJ0Yt2NPpxhwE7ywL5HiIV710vQ0n8VthNWS9O2QFP7fXSm/ENj3qkLZd1xYakmLXsPx1zRZvioRGkRSaRAx+ybxpBIeISSixAOfW50J720mHtrnPD9Psj8XQT7ihwIk3OIbKVludNcBl8c10POmS59WDnXTS+ZwxzQc04Fj1H4z4G4zCZvl+4ALVw6L8k30J/3l/Q7w5grr5r9P6YbCw+CzaRc/lFLNV9/+f9WTMQhSqtPG36lnjCuof35qbHTuB9J6N1fg9bvI2Tz+/pTO0LOUWzALLuLcmwwh+ei+g1tDExrG6kAqwKdzsqZ0Gve2G/7QXLlBZU2a67pfxDl/btsJ2LtK8AfNdk0dR/owxJfOK7byC/pcVD+RwswHDnCwwP55vDJY9ifGM6I6rLdouWP38flX3Mf/5q4t4tESEHjg9I7o6VbVxcEnzV+zl1Mq13fkkLq+eE1mxHL2c5r2n26+SDOmNwfN4DPtn3VbQisty8Zp9YJ+gu80FYPbEzaXa3/fwn5lM/v0HvCQSieT5GH/JY5NJb5nR2H6e4AY+RZRVpjttCyyTHr0tJx9+piyM3a4Y06/Xz9zY+6SGSZafbwT7U06bTyX6bAk1Z3nZ3G22be9dh6qC2zt+ZXHzqWQHs2IGM/ETrNr1rbaF7WoHxUcZ1dmM+7OlN3j/TKIP19fp3iTpjo9OrwhtmF5bgMubx2g03vpN1hW3u1woNI87KkLf7H79IudQH/qbwzfL+kzincL5tcRiCskuuL63u+5hnLUKxA/QKozEDozB/pe7MMnGUntVqFqHjyWiQhNhr83lupOonwmdq64EX8ZZt58yeVwOtQq7+1be8sFOk6Ol9KtQUayPr+/DZbO5CNNMTt2dGR2KVTGfGd1pDpnF3R8PFxEKHXC6T99/WbKsld4VKtbloxjng55lWfuOuWo9T4c4Dq79t10zGgUwaD/zcJGcR6QE2uD7oFA/1sr9xsFnIzYgfHRv5HG0K+GLzEo7RrCZ7zftFpLkcf+vUGh01lveP2whdun0rRA+3Dx/q5DOmNk+4FPdnrUu0FsNr1W9XIl2vZjj1g+btuO0fNhYMqQ7BFSlv4caqcJPHmS6UTi4hNS+uMXeKdRFpqhE4MmEOUzhPlsk4kuaX1pP9AHIXhVW48+e1PJhhzRsMlJYBe3DITrcRMNGbK0I259jAvPYnc5bpy3aKRvNIQoXcPw1tQegqnZ/DZu36mMTRRyX0s5NsW7bpIObfqnR9ubModO93cyKsou0XfYwymK7+nBnUED3Anxv+F/g7cvP2vVIAFZ/Co9/gUAqsTeFxl/yH10Ef03jtDdkE08ikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpH8C/wPJzLQ/wIiNe8AAAAASUVORK5CYII="
                        alt="quality" />
                </div>
                <div className='slide'>
                    <img className='w-full h-full hover:translate-z-20' src="https://pieldegallina.com.ar/wp-content/uploads/logo-cabecera-pieldegallina-1.png" alt="pielldegallina" />
                </div>
                <div className='slide'>
                    <img className='w-full h-full hover:translate-z-20' src="https://d1fdloi71mui9q.cloudfront.net/BLONa4tnSyaXmfWndXks_Xgk3VRmdGPOWkKuC" alt="pez volcan" />
                </div>
                <div className='slide'>
                    <img className='w-full h-full hover:translate-z-20' src="https://alpogo-uploads.s3.us-east-2.amazonaws.com/assets/open-graph.jpg" alt="alpogo" />
                </div>
                <div className='slide'>
                    <img className='w-full h-full hover:translate-z-20' src="data:image/png;base64,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"
                        alt="quality" />
                </div>
                <div className='slide hover:translate-z-20'>
                    <img className='w-full h-full hover:translate-z-20' src="https://pieldegallina.com.ar/wp-content/uploads/logo-cabecera-pieldegallina-1.png" alt="pielldegallina" />
                </div>
                <div className='slide'>
                    <img className='w-full h-full hover:translate-z-20' src="https://d1fdloi71mui9q.cloudfront.net/BLONa4tnSyaXmfWndXks_Xgk3VRmdGPOWkKuC" alt="pez volcan" />
                </div>
                <div className='slide'>
                    <img className='w-full h-full ' src="https://alpogo-uploads.s3.us-east-2.amazonaws.com/assets/open-graph.jpg" alt="alpogo" />
                </div>
            </div>
        </div>
    )
}

export default Carousel