---
layout: page
title: Fluxpoint.py
description: A modern, easy to use, feature-rich, and async ready API wrapper for Fluxpoint written in Python.
img: /assets/img/fluxpoint.png
importance: 2
category: work
giscus_comments: true
---
## fluxpoint.py

============

[![Discord server invite](https://discord.com/api/guilds/920190307595874304/embed.png)](https://discord.gg/vfXHwS3nmQ) [![PyPI version info](https://img.shields.io/pypi/v/fluxpoint.py.svg)](https://pypi.python.org/pypi/fluxpoint.py) [![PyPI supported Python versions](https://img.shields.io/pypi/pyversions/fluxpoint.py.svg)](https://pypi.python.org/pypi/fluxpoint.py)

A modern, easy to use, feature-rich, and async ready API wrapper for
Fluxpoint written in Python.

Key Features
------------

- Modern Pythonic API using `async` and `await`.
- Proper rate limit handling.
- Optimised in both speed and memory.

Installing
----------

**Python 3.8 or higher is required**

To install the library, you can just run the following command:

```{.sh}
# Linux/macOS
python3 -m pip install -U fluxpoint.py

# Windows
py -3 -m pip install -U fluxpoint.py
```

To speedup the api wrapper you should run the following command:

```{.sh}
# Linux/macOS
python3 -m pip install -U "fluxpoint.py[speed]"

# Windows
py -3 -m pip install -U fluxpoint.py[speed]
```

To install the development version, do the following:

```{.sh}
$ git clone https://github.com/Dhruvacube/fluxpoint.py
$ cd fluxpoint.py
$ python3 -m pip install -U .[speed]
```

Quick Example
-------------

```{.py}
from fluxpoint import FluxpointClient
import asyncio
import sys

# setting up the fluxpoint client handler
a = FluxpointClient(api_token="get api token from https://fluxpoint.dev/api/access")

# setting up the windows loop policy according to the operating system
if sys.platform.startswith('win32') or sys.platform.startswith('cygwin'):
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

# getting the image url of AZURLANE image
print(asyncio.run(a.azurlane()))
```

You can find more examples in the [examples
directory](https://github.com/Dhruvacube/fluxpoint.py/tree/master/examples).

---

Links
-----

- [Documentation](https://fluxpointpy.readthedocs.io/en/latest/)
- [Official Support Discord Server](https://discord.gg/vfXHwS3nmQ)
- [Official Fluxpoint server](https://discord.gg/fluxpoint)
- [Get Fluxpoint api access](https://fluxpoint.dev/api/access)
- [Official Fluxpoint api docs](https://bluedocs.page/fluxpoint-api)
