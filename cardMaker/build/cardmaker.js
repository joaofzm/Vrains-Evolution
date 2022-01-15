/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */

/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(["react", "react-dom", "create-react-class"], t)
    : t(React, ReactDOM, createReactClass);
})(0, function (e, t, r) {
  var n, a, i;
  return (
    (function (e) {
      function t(e, t) {
        return b.call(e, t);
      }
      function r(e, t) {
        var r,
          n,
          a,
          i,
          o,
          l,
          s,
          p,
          c,
          u,
          h,
          d,
          f = t && t.split("/"),
          m = w.map,
          g = (m && m["*"]) || {};
        if (e) {
          for (
            e = e.split("/"),
              o = e.length - 1,
              w.nodeIdCompat && x.test(e[o]) && (e[o] = e[o].replace(x, "")),
              "." === e[0].charAt(0) &&
                f &&
                ((d = f.slice(0, f.length - 1)), (e = d.concat(e))),
              c = 0;
            c < e.length;
            c++
          )
            if ("." === (h = e[c])) e.splice(c, 1), (c -= 1);
            else if (".." === h) {
              if (0 === c || (1 === c && ".." === e[2]) || ".." === e[c - 1])
                continue;
              c > 0 && (e.splice(c - 1, 2), (c -= 2));
            }
          e = e.join("/");
        }
        if ((f || g) && m) {
          for (r = e.split("/"), c = r.length; c > 0; c -= 1) {
            if (((n = r.slice(0, c).join("/")), f))
              for (u = f.length; u > 0; u -= 1)
                if ((a = m[f.slice(0, u).join("/")]) && (a = a[n])) {
                  (i = a), (l = c);
                  break;
                }
            if (i) break;
            !s && g && g[n] && ((s = g[n]), (p = c));
          }
          !i && s && ((i = s), (l = p)),
            i && (r.splice(0, l, i), (e = r.join("/")));
        }
        return e;
      }
      function o(t, r) {
        return function () {
          var n = k.call(arguments, 0);
          return (
            "string" != typeof n[0] && 1 === n.length && n.push(null),
            f.apply(e, n.concat([t, r]))
          );
        };
      }
      function l(e) {
        return function (t) {
          return r(t, e);
        };
      }
      function s(e) {
        return function (t) {
          v[e] = t;
        };
      }
      function p(r) {
        if (t(y, r)) {
          var n = y[r];
          delete y[r], (E[r] = !0), d.apply(e, n);
        }
        if (!t(v, r) && !t(E, r)) throw new Error("No " + r);
        return v[r];
      }
      function c(e) {
        var t,
          r = e ? e.indexOf("!") : -1;
        return (
          r > -1 &&
            ((t = e.substring(0, r)), (e = e.substring(r + 1, e.length))),
          [t, e]
        );
      }
      function u(e) {
        return e ? c(e) : [];
      }
      function h(e) {
        return function () {
          return (w && w.config && w.config[e]) || {};
        };
      }
      var d,
        f,
        m,
        g,
        v = {},
        y = {},
        w = {},
        E = {},
        b = Object.prototype.hasOwnProperty,
        k = [].slice,
        x = /\.js$/;
      (m = function (e, t) {
        var n,
          a = c(e),
          i = a[0],
          o = t[1];
        return (
          (e = a[1]),
          i && ((i = r(i, o)), (n = p(i))),
          i
            ? (e = n && n.normalize ? n.normalize(e, l(o)) : r(e, o))
            : ((e = r(e, o)),
              (a = c(e)),
              (i = a[0]),
              (e = a[1]),
              i && (n = p(i))),
          { f: i ? i + "!" + e : e, n: e, pr: i, p: n }
        );
      }),
        (g = {
          require: function (e) {
            return o(e);
          },
          exports: function (e) {
            var t = v[e];
            return void 0 !== t ? t : (v[e] = {});
          },
          module: function (e) {
            return { id: e, uri: "", exports: v[e], config: h(e) };
          },
        }),
        (d = function (r, n, a, i) {
          var l,
            c,
            h,
            d,
            f,
            w,
            b,
            k = [],
            x = typeof a;
          if (
            ((i = i || r), (w = u(i)), "undefined" === x || "function" === x)
          ) {
            for (
              n = !n.length && a.length ? ["require", "exports", "module"] : n,
                f = 0;
              f < n.length;
              f += 1
            )
              if (((d = m(n[f], w)), "require" === (c = d.f)))
                k[f] = g.require(r);
              else if ("exports" === c) (k[f] = g.exports(r)), (b = !0);
              else if ("module" === c) l = k[f] = g.module(r);
              else if (t(v, c) || t(y, c) || t(E, c)) k[f] = p(c);
              else {
                if (!d.p) throw new Error(r + " missing " + c);
                d.p.load(d.n, o(i, !0), s(c), {}), (k[f] = v[c]);
              }
            (h = a ? a.apply(v[r], k) : void 0),
              r &&
                (l && l.exports !== e && l.exports !== v[r]
                  ? (v[r] = l.exports)
                  : (h === e && b) || (v[r] = h));
          } else r && (v[r] = a);
        }),
        (n =
          a =
          f =
            function (t, r, n, a, i) {
              if ("string" == typeof t) return g[t] ? g[t](r) : p(m(t, u(r)).f);
              if (!t.splice) {
                if (((w = t), w.deps && f(w.deps, w.callback), !r)) return;
                r.splice ? ((t = r), (r = n), (n = null)) : (t = e);
              }
              return (
                (r = r || function () {}),
                "function" == typeof n && ((n = a), (a = i)),
                a
                  ? d(e, t, r, n)
                  : setTimeout(function () {
                      d(e, t, r, n);
                    }, 4),
                f
              );
            }),
        (f.config = function (e) {
          return f(e);
        }),
        (n._defined = v),
        (i = function (e, r, n) {
          if ("string" != typeof e)
            throw new Error(
              "See almond README: incorrect module build, no module name"
            );
          r.splice || ((n = r), (r = [])),
            t(v, e) || t(y, e) || (y[e] = [e, r, n]);
        }),
        (i.amd = { jQuery: !0 });
    })(),
    i("../lib/almond/almond", function () {}),
    i("draw/Group", ["react", "react-class"], function (e, t) {
      var r = t({
        render: function () {
          var t = this.props.children,
            r = this.props.canvas,
            n = this.props.repaint || this.repaint;
          return (
            (t = e.Children.map(t, function (t) {
              return e.cloneElement(t, { canvas: r, repaint: n });
            })),
            e.createElement("div", { style: { position: "relative" } }, t)
          );
        },
        componentWillUpdate: function () {
          if ("function" !== this.props.repaint) {
            this.r = !0;
            var e = this.props.canvas;
            if (null !== e) {
              var t = e.getContext("2d");
              (t.fillStyle = "#fff"), t.fillRect(0, 0, e.width, e.height);
            }
          }
        },
        repaint: function () {
          "function" != typeof this.props.repaint
            ? this.forceUpdate()
            : this.props.repaint();
        },
      });
      return (r.displayName = "Group"), (r.defaultProps = {}), r;
    }),
    i("draw/Canvas", ["react", "react-class", "./Group"], function (e, t, r) {
      return t({
        getInitialState: function () {
          return { canvas: null };
        },
        render: function () {
          return e.createElement(
            "canvas",
            {
              onClick: this.save.bind(this),
              className: this.props.className,
              width: this.props.width,
              height: this.props.height,
              ref: function (e) {
                this.canvas = e;
              }.bind(this),
            },
            e.createElement(
              r,
              { canvas: this.state.canvas },
              this.props.children
            )
          );
        },
        save: function () {
          var e = "";
          null !== this.state.canvas && (e = this.state.canvas.toDataURL());
          var t = document.createElement("a");
          if (
            (t.setAttribute("href", e),
            t.setAttribute("download", "Image.png"),
            document.createEvent)
          ) {
            var r = document.createEvent("MouseEvent");
            r.initEvent("click", !0, !0), t.dispatchEvent(r);
          } else t.click();
        },
        componentDidMount: function () {
          var e = this.canvas;
          delete this.canvas, this.setState({ canvas: e });
        },
      });
    }),
    i("draw/Text", ["react", "react-class"], function (e, t) {
      var r = t({
        render: function () {
          return e.createElement(
            "div",
            { style: this.props.style },
            this.props.text
          );
        },
        componentDidMount: function () {
          this.draw();
        },
        componentDidUpdate: function () {
          this.draw();
        },
        draw: function () {
          var e = this.props.canvas;
          if (null !== e) {
            var t = e.getContext("2d"),
              r = JSON.parse(JSON.stringify(this.props.style));
            t.save(), (t.fillStyle = r.color || "black");
            var n;
            do {
              this.setFont(t, r),
                (n = this.createParagraphs(t, this.props.text, r.width));
              var a =
                r.fontSize *
                n.reduce(function (e, t) {
                  return e + t.length;
                }, 0);
              if (void 0 === r.height || a < r.height) break;
              r.fontSize -= 0.25;
            } while (r.fontSize > 0);
            this.drawText(t, n, r.fontSize), t.restore();
          }
        },
        createParagraphs: function (e, t, r) {
          return t.split("\n").map(function (t) {
            switch (this.props.style.whitespace) {
              case "nowrap":
                return [t];
              default:
                return this.wrapParagraph(e, t, r);
            }
          }, this);
        },
        wrapParagraph: function (e, t, r) {
          for (
            var n = t.split(" ").filter(function (e) {
                return e.length > 0;
              }),
              a = [],
              i = e.measureText(" ").width,
              o = { width: -i, words: [] },
              l = 0;
            l < n.length;
            ++l
          ) {
            var s = n[l],
              p = e.measureText(s).width;
            o.width + p + i < r
              ? ((o.width += p + i), (o.words[o.words.length] = s))
              : (o.words.length > 0 && (a[a.length] = o.words.join(" ")),
                (o = { width: p, words: [s] }));
          }
          return (a[a.length] = o.words.join(" ")), a;
        },
        drawText: function (e, t, r) {
          e.save(), e.translate(this.props.style.left, this.props.style.top);
          for (var n = 0; n < t.length; ++n)
            for (var a = t[n], i = 0; i < a.length; ++i) {
              var o = a[i];
              switch ((e.translate(0, r), this.props.style.textAlign)) {
                default:
                  this.drawTextDefaultAligned(e, o);
                  break;
                case "left":
                  this.drawTextLeftAligned(e, o);
                  break;
                case "right":
                  this.drawTextRightAligned(e, o);
                  break;
                case "center":
                  this.drawTextCentered(e, o);
                  break;
                case "justify":
                  i !== a.length - 1
                    ? this.drawTextJustified(e, o)
                    : this.drawTextDefaultAligned(e, o);
              }
            }
          e.restore();
        },
        drawTextDefaultAligned: function (e, t) {
          this.drawTextLeftAligned(e, t);
        },
        drawTextLeftAligned: function (e, t) {
          var r = e.measureText(t).width,
            n = this.props.style.width || 0,
            a = Math.min(n / Math.max(r, 1), 1);
          e.save(), e.scale(a, 1), e.fillText(t, 0, 0), e.restore();
        },
        drawTextRightAligned: function (e, t) {
          var r = e.measureText(t).width,
            n = this.props.style.width || 0,
            a = Math.min(n / Math.max(r, 1), 1);
          e.save(),
            e.translate(n - r * a, 0),
            e.scale(a, 1),
            e.fillText(t, 0, 0),
            e.restore();
        },
        drawTextCentered: function (e, t) {
          var r = e.measureText(t).width,
            n = this.props.style.width || 0,
            a = Math.min(n / Math.max(r, 1), 1);
          e.save(),
            e.translate(n / 2 - (r * a) / 2, 0),
            e.scale(a, 1),
            e.fillText(t, 0, 0),
            e.restore();
        },
        drawTextJustified: function (e, t) {
          for (
            var r = t.split(" "),
              n = e.measureText(" ").width,
              a =
                (this.props.style.width - e.measureText(t).width) /
                Math.max(1, r.length - 1),
              i = 0,
              o = 0;
            o < r.length;
            ++o
          )
            e.fillText(r[o], i, 0), (i += e.measureText(r[o]).width + n + a);
        },
        setFont: function (e, t) {
          e.font = [
            t.fontStyle,
            t.fontVariant,
            t.fontWeight,
            t.fontSize + "px",
            t.fontFamily,
          ].join(" ");
        },
      });
      return (
        (r.displayName = "Text"),
        (r.defaultProps = {
          repaint: function () {},
          canvas: null,
          text: "",
          width: void 0,
          style: {
            color: "black",
            fontFamily: ["serif"],
            fontVariant: "normal",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 400,
          },
        }),
        r
      );
    }),
    i("tcg/ygo/Resources", [], function () {
      return "undefined" != typeof NCM_RESOURCES ? NCM_RESOURCES : "res";
    }),
    i("tcg/ygo/Rarities", ["./Resources"], function (e) {
      var t = [e, "tcg", "ygo", "foil"].join("/");
      return {
        common: { name: "Common", foil: void 0, color: void 0 },
        rare: { name: "Rare", foil: void 0, color: "silver" },
        ultra: {
          name: "Ultra rare",
          foil: [t, "Secret.png"].join("/"),
          color: "gold",
        },
        secret: {
          name: "Secret rare",
          foil: [t, "Secret.png"].join("/"),
          color: "silver",
        },
      };
    }),
    i(
      "tcg/ygo/layout/component/CardName",
      ["react", "react-class", "draw/Text", "../../Rarities"],
      function (e, t, r, n) {
        var a = {
            // Card name
            regular: {
              fontFamily: ["Visitor TT1 BRK", "Spectral SC", "serif"],
              fontSize: 32,
              fontStyle: "normal",
              fontWeight: 600,
              textAlign: "left",
              whitespace: "nowrap",
              left: 32,
              top: 24,
              width: 315,
              height: 48,
            },
            skill: {
              fontFamily: ["Heebo", "sans-serif"],
              fontSize: 32,
              fontStyle: "normal",
              fontWeight: 500,
              textAlign: "left",
              whitespace: "nowrap",
              left: 32,
              top: 24,
              width: 315,
              height: 48,
            },
          },
          i = {
            default: {
              highlight: { color: "transparent" },
              base: { color: "#000" },
            },
            white: {
              highlight: { color: "transparent" },
              base: { color: "#FFF" },
            },
            silver: {
              highlight: { color: "#b6b6b6" },
              base: { color: "#1e1e1e" },
            },
            gold: {
              highlight: { color: "#d3b146" },
              base: { color: "#4e3518" },
            },
          },
          o = t({
            render: function () {
              var t = (n[this.props.rarity] || {}).color || this.props.color,
                o = a[this.props.type] || a.regular;
              return e.createElement(
                e.Fragment,
                null,
                e.createElement(r, {
                  text: this.props.value,
                  style: Object.assign({}, o, (i[t] || i.default).highlight, {
                    top: o.top - 1,
                    left: o.left - 1,
                  }),
                  repaint: this.props.repaint,
                  canvas: this.props.canvas,
                }),
                e.createElement(r, {
                  text: this.props.value,
                  style: Object.assign({}, o, (i[t] || i.default).base),
                  repaint: this.props.repaint,
                  canvas: this.props.canvas,
                })
              );
            },
          });
        return (
          (o.displayName = "CardName"),
          (o.defaultProps = {
            value: "",
            rarity: "common",
            type: "regular",
            color: "black",
          }),
          o
        );
      }
    ),
    i("tcg/ygo/Attributes", ["./Resources"], function (e) {
      var t = [e, "tcg", "ygo", "attribute"].join("/");
      return {
        None: { url: void 0 },
        Dark: { url: [t, "Dark.png"].join("/") },
        Divine: { url: [t, "Divine.png"].join("/") },
        Earth: { url: [t, "Earth.png"].join("/") },
        Fire: { url: [t, "Fire.png"].join("/") },
        Light: { url: [t, "Light.png"].join("/") },
        Water: { url: [t, "Water.png"].join("/") },
        Wind: { url: [t, "Wind.png"].join("/") },
        Spell: { url: [t, "Spell.png"].join("/") },
        Trap: { url: [t, "Trap.png"].join("/") },
      };
    }),
    i("draw/Image", ["react", "react-class"], function (e, t) {
      var r = t({
        getInitialState: function () {
          return { image: null };
        },
        render: function () {
          return e.createElement("img", {
            src: this.props.src,
            crossOrigin: "anonymous",
            onLoad: this.onLoad,
            style: {
              position: "absolute",
              left: this.props.style.left,
              top: this.props.style.top,
              width: this.props.style.width,
              height: this.props.style.height,
              mixBlendMode: this.props.style.mixBlendMode,
            },
          });
        },
        onLoad: function (e) {
          this.setState({ image: e.target }), this.props.repaint();
        },
        componentDidUpdate: function () {
          var e = this.props.canvas;
          if (null !== e && null !== this.state.image) {
            var t = e.getContext("2d");
            t.save(),
              (t.globalCompositeOperation = this.props.style.mixBlendMode),
              t.drawImage(
                this.state.image,
                this.props.style.left,
                this.props.style.top,
                this.props.style.width || this.state.image.width,
                this.props.style.height || this.state.image.height
              ),
              t.restore();
          }
        },
      });
      return (
        (r.defaultProps = {
          style: {
            left: 0,
            top: 0,
            width: void 0,
            height: void 0,
            mixBlendMode: "normal",
          },
          canvas: null,
          repaint: function () {},
        }),
        r
      );
    }),
    i(
      "tcg/ygo/layout/component/Attribute",
      ["react", "react-class", "../../Attributes", "draw/Image"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            var t = Object.assign({}, this.props, {
              src: r[this.props.value].url,
              style: { left: 350, top: 28, width: 40, height: 40 },
            });
            return e.createElement(n, t);
          },
        });
        return (
          (a.displayName = "Attribute"), (a.defaultProps = { value: "None" }), a
        );
      }
    ),
    i(
      "tcg/ygo/layout/component/Border",
      ["react", "react-class", "draw/Image", "../../Resources"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            var t = n + "/tcg/ygo/border/" + this.props.value + ".png";
            return (
              this.props.pendulum && (t = t.replace(".png", ".pendulum.png")),
              e.createElement(r, {
                src: t,
                style: { left: 0, top: 0, width: 420, height: 610 },
                canvas: this.props.canvas,
                repaint: this.props.repaint,
              })
            );
          },
        });
        return (
          (a.displayName = "Border"), (a.defaultProps = { value: "Normal" }), a
        );
      }
    ),
    i(
      "tcg/ygo/layout/component/Image",
      ["react", "react-class", "draw/Image", "../../Rarities"],
      function (e, t, r, n) {
        var a = {
            // Image here
            Normal: { left: 25, top: 86, width: 370, height: 370 },
            Pendulum: { left: 30, top: 110, width: 350, height: 350 },
          },
          i = t({
            render: function () {
              var t = this.props.pendulum ? a.Pendulum : a.Normal;
              e.createElement("span");
              return e.createElement(
                e.Fragment,
                null,
                e.createElement(r, {
                  src: this.props.value,
                  style: t,
                  repaint: this.props.repaint,
                  canvas: this.props.canvas,
                }),
                e.createElement(r, {
                  src: (n[this.props.rarity] || {}).foil,
                  style: Object.assign({}, t, { mixBlendMode: "color-dodge" }),
                  repaint: this.props.repaint,
                  canvas: this.props.canvas,
                })
              );
            },
          });
        return (
          (i.displayName = "Image"), (i.defaultProps = { rarity: "common" }), i
        );
      }
    ),
    i("tcg/ygo/Stars", ["./Resources"], function (e) {
      var t = [e, "tcg", "ygo", "star"].join("/");
      return {
        Normal: { url: [t, "Normal.png"].join("/") },
        Negative: { url: [t, "Negative.png"].join("/") },
        Xyz: { url: [t, "Xyz.png"].join("/") },
      };
    }),
    i(
      "tcg/ygo/layout/component/Level",
      ["react", "react-class", "../../Stars", "draw/Group", "draw/Image"],
      function (e, t, r, n, a) {
        var i = {
            float: "right",
            left: 43,
            top: 73,
            width: 28,
            height: 28,
            maxWidth: 334,
          },
          o = {
            float: "right",
            left: 35,
            top: 73,
            width: 28,
            height: 28,
            maxWidth: 350,
          },
          l = [null, i, i, i, i, i, i, i, i, i, i, i, o],
          s = (o.maxWidth - 12 * o.width) / 12,
          p = t({
            render: function () {
              for (
                var t = [],
                  i = Math.min(Math.abs(this.props.value), 12),
                  o = l[i] || {},
                  p = this.props.value > 0,
                  c = p ? o.maxWidth - (o.width + s) : 0,
                  u = p ? -1 : 1,
                  h = 0;
                h < i;
                ++h
              )
                t[t.length] = e.createElement(a, {
                  src: r[this.props.star].url,
                  key: "star:" + h,
                  style: {
                    left: o.left + c + u * (h * (o.width + s)),
                    top: o.top,
                    width: o.width,
                    height: o.height,
                  },
                });
              return e.createElement(n, this.props, t);
            },
          });
        return (p.displayName = "Level"), (p.defaultProps = {}), p;
      }
    ),
    i("tcg/ygo/Icons", ["./Resources"], function (e) {
      var t = [e, "tcg", "ygo", "icon"].join("/");
      return {
        None: { url: null },
        Continuous: { url: [t, "Continuous.png"].join("/") },
        Counter: { url: [t, "Counter.png"].join("/") },
        Equip: { url: [t, "Equip.png"].join("/") },
        Field: { url: [t, "Field.png"].join("/") },
        "Quick-play": { url: [t, "Quick-play.png"].join("/") },
        Ritual: { url: [t, "Ritual.png"].join("/") },
      };
    }),
    i(
      "tcg/ygo/layout/component/Type",
      [
        "react",
        "react-class",
        "draw/Group",
        "draw/Image",
        "draw/Text",
        "../../Icons",
      ],
      function (e, t, r, n, a, i) {
        var o = {
            Monster: {
                // Tuner
              fontFamily: ["Visitor TT1 BRK", "serif"],
              fontSize: 28,
              fontWeight: 800,
              textAlign: "left",
              whitespace: "nowrap",
              left: 35,
              top: 550,
              width: "auto",
              height: void 0,
            },
            Backrow: {
              Icon: { left: 346, top: 74, width: 24, height: 24 },
              Type: {
                fontFamily: ["Visitor TT1 BRK", "serif"],
                fontSize: 16,
                fontWeight: 800,
                textAlign: "right",
                whitespace: "nowrap",
                left: 40,
                top: 75,
                width: 340,
                height: 20,
              },
              TypeWithIcon: {
                fontFamily: ["Spectral SC", "serif"],
                fontSize: 16,
                fontWeight: 800,
                textAlign: "right",
                whitespace: "nowrap",
                left: 40,
                top: 75,
                width: 306,
                height: 20,
              },
              TypeWithIconClosing: {
                fontFamily: ["Spectral SC", "serif"],
                fontSize: 16,
                fontWeight: 800,
                textAlign: "left",
                whitespace: "nowrap",
                left: 370,
                top: 75,
                width: 10,
                height: 20,
              },
            },
          },
          l = t({
            render: function () {
              switch (this.props.type) {
                case "Backrow":
                  var t = [
                    e.createElement(a, {
                      text: ["[", this.props.value, ""].join(" "),
                      style: o.Backrow.TypeWithIcon,
                      key: "type",
                    }),
                    e.createElement(n, {
                      src: (i[this.props.icon] || { url: "" }).url,
                      style: o.Backrow.Icon,
                      key: "icon",
                    }),
                    e.createElement(a, {
                      text: " ]",
                      key: "close",
                      style: o.Backrow.TypeWithIconClosing,
                    }),
                  ];
                  return e.createElement(
                    r,
                    { canvas: this.props.canvas, repaint: this.props.repaint },
                    null !== (i[this.props.icon] || { url: null }).url
                      ? t
                      : e.createElement(a, {
                          text: ["[", this.props.value, "]"].join(" "),
                          style: o.Backrow.Type,
                        })
                  );
                case "Monster":
                  return e.createElement(a, {
                    text: ["[", this.props.value, "]"].join(" "),
                    style: o.Monster,
                    canvas: this.props.canvas,
                    repaint: this.props.repaint,
                  });
              }
              return null;
            },
          });
        return (
          (l.displayName = "Circulation"),
          (l.defaultProps = { value: "", icon: "None", type: "Monster" }),
          l
        );
      }
    ),
    i(
      "tcg/ygo/layout/component/Effect",
      ["react", "react-class", "draw/Text"],
      function (e, t, r) {
        var n = {
            Monster: {
              fontFamily: ["Visitor TT1 BRK", "Spectral", "serif"],
              fontSize: 18,
              textAlign: "justify",
              left: 35,
              top: 475,
              width: 350,
              height: 75,
            },
            Backrow: {
              fontFamily: ["Visitor TT1 BRK", "Spectral", "serif"],
              fontSize: 18,
              textAlign: "justify",
              left: 35,
              top: 460,
              width: 350,
              height: 110,
            },
            Vanilla: {
              fontFamily: ["Amiri", "serif"],
              fontStyle: "italic",
              fontSize: 13,
              textAlign: "justify",
              left: 35,
              top: 475,
              width: 350,
              height: 75,
            },
            Skill: {
              fontFamily: ["Matrix Book", "Spectral", "serif"],
              fontSize: 13,
              textAlign: "justify",
              left: 35,
              top: 475,
              width: 350,
              height: 95,
            },
          },
          a = t({
            render: function () {
              return e.createElement(r, {
                text: this.props.value,
                style: Object.assign({}, n[this.props.type]),
                repaint: this.props.repaint,
                canvas: this.props.canvas,
              });
            },
          });
        return (
          (a.displayName = "Effect"),
          (a.defaultProps = { value: "", type: "Monster", flavour: !1 }),
          a
        );
      }
    ),
    i(
      "tcg/ygo/layout/component/Atk",
      ["react", "react-class", "draw/Text"],
      function (e, t, r) {
        var n = {
            // atk
            fontFamily: ["Visitor TT1 BRK", "serif"],
            fontSize: 28,
            textAlign: "right",
            whitespace: "nowrap",
            fontWeight: 600,
            left: 240,
            top: 550,
            width: "auto",
            height: void 0,
          },
          a = t({
            render: function () {
              return e.createElement(r, {
                text: this.props.value,
                style: n,
                repaint: this.props.repaint,
                canvas: this.props.canvas,
              });
            },
          });
        return (a.displayName = "Atk"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/component/Def",
      ["react", "react-class", "draw/Text"],
      function (e, t, r) {
        var n = {
            fontFamily: ["Visitor TT1 BRK", "serif"],
            fontSize: 28,
            textAlign: "right",
            whitespace: "nowrap",
            fontWeight: 600,
            foreground: "red",
            left: 320,
            top: 550,
            width: "auto",
            height: void 0,
          },
          a = t({
            render: function () {
              return e.createElement(r, {
                text: this.props.value,
                style: n,
                repaint: this.props.repaint,
                canvas: this.props.canvas,
              });
            },
          });
        return (
          (a.displayName = "Def"), (a.defaultProps = { type: "Regular" }), a
        );
      }
    ),
    i(
      "tcg/ygo/layout/component/Pendulum",
      ["react", "react-class", "draw/Group", "draw/Text"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return this.props.enabled
              ? e.createElement(
                  r,
                  { canvas: this.props.canvas, repaint: this.props.repaint },
                  e.createElement(n, {
                    text: this.props.effect,
                    style: {
                      fontFamily: ["Matrix Book", "Spectral", "serif"],
                      fontSize: 13,
                      textAlign: "justify",
                      left: 65,
                      top: 385,
                      width: 290,
                      height: 70,
                    },
                  }),
                  e.createElement(n, {
                    text: this.props.blue,
                    style: {
                      fontFamily: ["Crimson Text", "serif"],
                      fontSize: 28,
                      textAlign: "center",
                      fontWeight: 600,
                      left: 32,
                      top: 410,
                      width: 23,
                      height: 30,
                    },
                  }),
                  e.createElement(n, {
                    text: this.props.red,
                    style: {
                      fontFamily: ["Crimson Text", "serif"],
                      fontSize: 28,
                      textAlign: "center",
                      fontWeight: 600,
                      left: 365,
                      top: 410,
                      width: 23,
                      height: 30,
                    },
                  })
                )
              : null;
          },
        });
        return (
          (a.displayName = "Pendulum"),
          (a.defaultProperties = { enabled: !1, blue: 0, red: 0, effect: "" }),
          a
        );
      }
    ),
    i(
      "tcg/ygo/layout/component/Link",
      ["react", "react-class", "draw/Text"],
      function (e, t, r) {
        var n = {
            fontFamily: ["IDroid", "Audiowide", "sans-serif"],
            fontSize: 16,
            textAlign: "right",
            whitespace: "nowrap",
            left: 370,
            top: 552,
            width: 15,
            height: void 0,
          },
          a = t({
            render: function () {
              return e.createElement(r, {
                text: this.props.value,
                style: n,
                repaint: this.props.repaint,
                canvas: this.props.canvas,
              });
            },
          });
        return (a.displayName = "Link"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/component/Serial",
      ["react", "react-class", "draw/Text"],
      function (e, t, r) {
        var n = t({
          render: function () {
            return e.createElement(r, {
              text: this.props.value,
              style: {
                fontFamily: ["Matrix Book", "Spectral", "serif"],
                color: this.props.color,
                fontSize: 12,
                textAlign: "left",
                whitespace: "nowrap",
                left: 20,
                top: 580,
                width: 150,
                height: void 0,
              },
              canvas: this.props.canvas,
              repaint: this.props.repaint,
            });
          },
        });
        return (
          (n.displayName = "Serial"),
          (n.defaultProps = { value: "", color: "black" }),
          n
        );
      }
    ),
    i(
      "tcg/ygo/layout/component/Copyright",
      ["react", "react-class", "draw/Text"],
      function (e, t, r) {
        var n = t({
          render: function () {
            return e.createElement(r, {
              text: this.props.value,
              style: {
                fontFamily: ["Matrix Book", "Spectral", "serif"],
                color: this.props.color,
                fontSize: 12,
                textAlign: "right",
                whitespace: "nowrap",
                left: 230,
                top: 580,
                width: 150,
                height: void 0,
              },
              canvas: this.props.canvas,
              repaint: this.props.repaint,
            });
          },
        });
        return (
          (n.displayName = "Copyright"),
          (n.defaultProps = { value: "", color: "black" }),
          n
        );
      }
    ),
    i(
      "tcg/ygo/layout/component/LinkMarkers",
      ["react", "react-class", "draw/Group", "draw/Image", "../../Resources"],
      function (e, t, r, n, a) {
        var i = {
            regular: {
              topLeft: { top: 95, left: 32, width: 42, height: 42 },
              topCenter: { top: 86, left: 174, width: 72, height: 25 },
              topRight: { top: 95, left: 346, width: 42, height: 42 },
              middleLeft: { top: 235, left: 26, width: 25, height: 72 },
              middleRight: { top: 235, left: 369, width: 25, height: 72 },
              bottomLeft: { top: 402, left: 32, width: 42, height: 42 },
              bottomCenter: { top: 428, left: 174, width: 72, height: 25 },
              bottomRight: { top: 402, left: 346, width: 42, height: 42 },
            },
            pendulum: {
              topLeft: { top: 95, left: 16, width: 42, height: 42 },
              topCenter: { top: 86, left: 174, width: 72, height: 25 },
              topRight: { top: 95, left: 362, width: 42, height: 42 },
              middleLeft: { top: 302, left: 6, width: 25, height: 72 },
              middleRight: { top: 302, left: 389, width: 25, height: 72 },
              bottomLeft: { top: 545, left: 16, width: 42, height: 42 },
              bottomCenter: { top: 572, left: 174, width: 72, height: 25 },
              bottomRight: { top: 545, left: 362, width: 42, height: 42 },
            },
          },
          o = a + "/tcg/ygo/marker",
          l = t({
            render: function () {
              var t = e.createElement,
                a = [],
                l = i[this.props.pendulum ? "pendulum" : "regular"];
              for (var s in l)
                l.hasOwnProperty(s) &&
                  this.props.hasOwnProperty(s) &&
                  !0 === this.props[s] &&
                  (a[a.length] = t(n, {
                    key: s,
                    src: o + "/" + s + ".png",
                    style: l[s],
                  }));
              return e.createElement(
                r,
                {
                  text: this.props.value,
                  repaint: this.props.repaint,
                  canvas: this.props.canvas,
                },
                a
              );
            },
          });
        return (
          (l.displayName = "LinkMarkers"),
          (l.defaultProps = {
            pendulumm: !1,
            topLeft: !1,
            topCenter: !1,
            topRight: !1,
            middleLeft: !1,
            middleRight: !1,
            bottomLeft: !1,
            bottomCenter: !1,
            bottomRight: !1,
          }),
          l
        );
      }
    ),
    i(
      "tcg/ygo/layout/component/Id",
      ["react", "react-class", "draw/Text"],
      function (e, t, r) {
        var n = {
            fontFamily: ["Matrix Book", "Spectral", "serif"],
            fontSize: 12,
            whitespace: "nowrap",
            height: void 0,
          },
          a = {
            regular: { textAlign: "right", left: 290, top: 437, width: 80 },
            pendulum: {
              color: "black",
              textAlign: "left",
              left: 35,
              top: 555,
              width: 80,
            },
            link: { textAlign: "right", left: 265, top: 437, width: 80 },
          },
          i = t({
            render: function () {
              return e.createElement(r, {
                text: this.props.value,
                style: Object.assign(
                  { color: this.props.color },
                  n,
                  a[this.props.position]
                ),
                canvas: this.props.canvas,
                repaint: this.props.repaint,
              });
            },
          });
        return (
          (i.displayName = "Id"),
          (i.defaultProps = { value: "", color: "black", position: "regular" }),
          i
        );
      }
    ),
    i(
      "tcg/ygo/layout/component/All",
      [
        "./CardName",
        "./Attribute",
        "./Border",
        "./Image",
        "./Level",
        "./Type",
        "./Effect",
        "./Atk",
        "./Def",
        "./Pendulum",
        "./Link",
        "./Serial",
        "./Copyright",
        "./LinkMarkers",
        "./Id",
      ],
      function (e, t, r, n, a, i, o, l, s, p, c, u, h, d, f) {
        return {
          CardName: e,
          Attribute: t,
          Border: r,
          Image: n,
          Level: a,
          Type: i,
          Effect: o,
          Atk: l,
          Def: s,
          Pendulum: p,
          Link: c,
          Serial: u,
          Copyright: h,
          LinkMarkers: d,
          Id: f,
        };
      }
    ),
    i(
      "tcg/ygo/layout/Normal",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: this.props.pendulum.enabled,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, {
                value: "Normal",
                pendulum: this.props.pendulum.enabled,
              }),
              e.createElement(n.CardName, {
                value: this.props.name,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(n.Level, {
                value: this.props.level,
                star: "Normal",
              }),
              e.createElement(n.Pendulum, this.props.pendulum),
              e.createElement(n.Type, { value: this.props.type }),
              e.createElement(n.Effect, {
                value: this.props.effect,
                type: "Vanilla",
              }),
              e.createElement(n.Atk, { value: this.props.atk }),
              e.createElement(n.Def, { value: this.props.def }),
              e.createElement(n.Serial, { value: this.props.serial }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: this.props.pendulum.enabled ? "pendulum" : "regular",
              }),
              e.createElement(n.Copyright, { value: this.props.copyright })
            );
          },
        });
        return (a.displayName = "Normal"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/Effect",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: this.props.pendulum.enabled,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, {
                value: "Effect",
                pendulum: this.props.pendulum.enabled,
              }),
              e.createElement(n.CardName, {
                value: this.props.name,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(n.Level, {
                value: this.props.level,
                star: "Normal",
              }),
              e.createElement(n.Pendulum, this.props.pendulum),
              e.createElement(n.Type, { value: this.props.type }),
              e.createElement(n.Effect, { value: this.props.effect }),
              e.createElement(n.Atk, { value: this.props.atk }),
              e.createElement(n.Def, { value: this.props.def }),
              e.createElement(n.Serial, { value: this.props.serial }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: this.props.pendulum.enabled ? "pendulum" : "regular",
              }),
              e.createElement(n.Copyright, { value: this.props.copyright })
            );
          },
        });
        return (a.displayName = "Effect"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/Ritual",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: this.props.pendulum.enabled,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, {
                value: "Ritual",
                pendulum: this.props.pendulum.enabled,
              }),
              e.createElement(n.CardName, {
                value: this.props.name,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(n.Level, {
                value: this.props.level,
                star: "Normal",
              }),
              e.createElement(n.Pendulum, this.props.pendulum),
              e.createElement(n.Type, { value: this.props.type }),
              e.createElement(n.Effect, { value: this.props.effect }),
              e.createElement(n.Atk, { value: this.props.atk }),
              e.createElement(n.Def, { value: this.props.def }),
              e.createElement(n.Serial, { value: this.props.serial }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: this.props.pendulum.enabled ? "pendulum" : "regular",
              }),
              e.createElement(n.Copyright, { value: this.props.copyright })
            );
          },
        });
        return (a.displayName = "Ritual"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/Fusion",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: this.props.pendulum.enabled,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, {
                value: "Fusion",
                pendulum: this.props.pendulum.enabled,
              }),
              e.createElement(n.CardName, {
                value: this.props.name,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(n.Level, {
                value: this.props.level,
                star: "Normal",
              }),
              e.createElement(n.Pendulum, this.props.pendulum),
              e.createElement(n.Type, { value: this.props.type }),
              e.createElement(n.Effect, { value: this.props.effect }),
              e.createElement(n.Atk, { value: this.props.atk }),
              e.createElement(n.Def, { value: this.props.def }),
              e.createElement(n.Serial, { value: this.props.serial }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: this.props.pendulum.enabled ? "pendulum" : "regular",
              }),
              e.createElement(n.Copyright, { value: this.props.copyright })
            );
          },
        });
        return (a.displayName = "Fusion"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/Synchro",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: this.props.pendulum.enabled,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, {
                value: "Synchro",
                pendulum: this.props.pendulum.enabled,
              }),
              e.createElement(n.CardName, {
                value: this.props.name,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(n.Level, {
                value: this.props.level,
                star: "Normal",
              }),
              e.createElement(n.Pendulum, this.props.pendulum),
              e.createElement(n.Type, { value: this.props.type }),
              e.createElement(n.Effect, { value: this.props.effect }),
              e.createElement(n.Atk, { value: this.props.atk }),
              e.createElement(n.Def, { value: this.props.def }),
              e.createElement(n.Serial, { value: this.props.serial }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: this.props.pendulum.enabled ? "pendulum" : "regular",
              }),
              e.createElement(n.Copyright, { value: this.props.copyright })
            );
          },
        });
        return (a.displayName = "Synchro"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/DarkSynchro",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: this.props.pendulum.enabled,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, {
                value: "DarkSynchro",
                pendulum: this.props.pendulum.enabled,
              }),
              e.createElement(n.CardName, {
                value: this.props.name,
                color: "white",
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(n.Level, {
                value: -this.props.level,
                star: "Negative",
              }),
              e.createElement(n.Pendulum, this.props.pendulum),
              e.createElement(n.Type, { value: this.props.type }),
              e.createElement(n.Effect, { value: this.props.effect }),
              e.createElement(n.Atk, { value: this.props.atk }),
              e.createElement(n.Def, { value: this.props.def }),
              e.createElement(n.Serial, {
                value: this.props.serial,
                color: this.props.pendulum.enabled ? void 0 : "white",
              }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: this.props.pendulum.enabled ? "pendulum" : "regular",
                color: this.props.pendulum.enabled ? void 0 : "white",
              }),
              e.createElement(n.Copyright, {
                value: this.props.copyright,
                color: this.props.pendulum.enabled ? void 0 : "white",
              })
            );
          },
        });
        return (a.displayName = "DarkSynchro"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/Unity",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: !0,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, { value: "Unity", pendulum: !0 }),
              e.createElement(n.CardName, {
                value: this.props.name,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(n.Level, {
                value: this.props.level,
                star: "Normal",
              }),
              e.createElement(
                n.Pendulum,
                Object.assign({}, this.props.pendulum, { enabled: !0 })
              ),
              e.createElement(n.Type, { value: this.props.type }),
              e.createElement(n.Effect, { value: this.props.effect }),
              e.createElement(n.Atk, { value: this.props.atk }),
              e.createElement(n.Def, { value: this.props.def }),
              e.createElement(n.Serial, { value: this.props.serial }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: "pendulum",
              }),
              e.createElement(n.Copyright, { value: this.props.copyright })
            );
          },
        });
        return (a.displayName = "Unity"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/Xyz",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: this.props.pendulum.enabled,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, {
                value: "Xyz",
                pendulum: this.props.pendulum.enabled,
              }),
              e.createElement(n.CardName, {
                value: this.props.name,
                color: "white",
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(n.Level, {
                value: -this.props.level,
                star: "Xyz",
              }),
              e.createElement(n.Pendulum, this.props.pendulum),
              e.createElement(n.Type, { value: this.props.type }),
              e.createElement(n.Effect, { value: this.props.effect }),
              e.createElement(n.Atk, { value: this.props.atk }),
              e.createElement(n.Def, { value: this.props.def }),
              e.createElement(n.Serial, {
                value: this.props.serial,
                color: this.props.pendulum.enabled ? void 0 : "white",
              }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: this.props.pendulum.enabled ? "pendulum" : "regular",
                color: this.props.pendulum.enabled ? void 0 : "white",
              }),
              e.createElement(n.Copyright, {
                value: this.props.copyright,
                color: this.props.pendulum.enabled ? void 0 : "white",
              })
            );
          },
        });
        return (a.displayName = "Xyz"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/Link",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: this.props.pendulum.enabled,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, {
                value: "Link",
                pendulum: this.props.pendulum.enabled,
              }),
              e.createElement(n.CardName, {
                value: this.props.name,
                color: "white",
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(
                n.LinkMarkers,
                Object.assign(
                  { pendulum: this.props.pendulum.enabled },
                  this.props.link
                )
              ),
              e.createElement(n.Pendulum, this.props.pendulum),
              e.createElement(n.Type, { value: this.props.type }),
              e.createElement(n.Effect, { value: this.props.effect }),
              e.createElement(n.Atk, { value: this.props.atk }),
              e.createElement(n.Link, { value: this.props.def }),
              e.createElement(n.Serial, { value: this.props.serial }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: this.props.pendulum.enabled ? "pendulum" : "link",
              }),
              e.createElement(n.Copyright, { value: this.props.copyright })
            );
          },
        });
        return (a.displayName = "Link"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/Token",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: this.props.pendulum.enabled,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, {
                value: "Token",
                pendulum: this.props.pendulum.enabled,
              }),
              e.createElement(n.CardName, {
                value: this.props.name,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(n.Level, {
                value: this.props.level,
                star: "Normal",
              }),
              e.createElement(n.Pendulum, this.props.pendulum),
              e.createElement(n.Type, { value: this.props.type }),
              e.createElement(n.Effect, { value: this.props.effect }),
              e.createElement(n.Atk, { value: this.props.atk }),
              e.createElement(n.Def, { value: this.props.def }),
              e.createElement(n.Serial, { value: this.props.serial }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: this.props.pendulum.enabled ? "pendulum" : "regular",
              }),
              e.createElement(n.Copyright, { value: this.props.copyright })
            );
          },
        });
        return (a.displayName = "Token"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/Spell",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: this.props.pendulum.enabled,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, {
                value: "Spell",
                pendulum: this.props.pendulum.enabled,
              }),
              e.createElement(n.CardName, {
                value: this.props.name,
                color: "white",
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(n.Pendulum, this.props.pendulum),
              e.createElement(n.Type, {
                value: this.props.type,
                type: "Backrow",
                icon: this.props.icon,
              }),
              e.createElement(n.Effect, {
                value: this.props.effect,
                type: "Backrow",
              }),
              e.createElement(n.Serial, { value: this.props.serial }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: this.props.pendulum.enabled ? "pendulum" : "regular",
              }),
              e.createElement(n.Copyright, { value: this.props.copyright })
            );
          },
        });
        return (a.displayName = "Spell"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/Trap",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                pendulum: this.props.pendulum.enabled,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, {
                value: "Trap",
                pendulum: this.props.pendulum.enabled,
              }),
              e.createElement(n.CardName, {
                value: this.props.name,
                color: "white",
                rarity: this.props.rarity,
              }),
              e.createElement(n.Attribute, { value: this.props.attribute }),
              e.createElement(n.Pendulum, this.props.pendulum),
              e.createElement(n.Type, {
                value: this.props.type,
                type: "Backrow",
                icon: this.props.icon,
              }),
              e.createElement(n.Effect, {
                value: this.props.effect,
                type: "Backrow",
              }),
              e.createElement(n.Serial, { value: this.props.serial }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: this.props.pendulum.enabled ? "pendulum" : "regular",
              }),
              e.createElement(n.Copyright, { value: this.props.copyright })
            );
          },
        });
        return (a.displayName = "Trap"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/Skill",
      ["react", "react-class", "draw/Group", "./component/All"],
      function (e, t, r, n) {
        var a = t({
          render: function () {
            return e.createElement(
              r,
              this.props,
              e.createElement(n.Image, {
                value: this.props.image,
                rarity: this.props.rarity,
              }),
              e.createElement(n.Border, { value: "Skill" }),
              e.createElement(n.CardName, {
                value: this.props.name,
                color: "white",
                rarity: this.props.rarity,
                type: "skill",
              }),
              e.createElement(n.Type, { value: this.props.type }),
              e.createElement(n.Effect, {
                value: this.props.effect,
                type: "Skill",
              }),
              e.createElement(n.Serial, {
                value: this.props.serial,
                color: "white",
              }),
              e.createElement(n.Id, {
                value: this.props.id,
                position: "regular",
                color: "white",
              }),
              e.createElement(n.Copyright, {
                value: this.props.copyright,
                color: "white",
              })
            );
          },
        });
        return (a.displayName = "Skill"), (a.defaultProps = {}), a;
      }
    ),
    i(
      "tcg/ygo/layout/All",
      [
        "./Normal",
        "./Effect",
        "./Ritual",
        "./Fusion",
        "./Synchro",
        "./DarkSynchro",
        "./Unity",
        "./Xyz",
        "./Link",
        "./Token",
        "./Spell",
        "./Trap",
        "./Skill",
      ],
      function (e, t, r, n, a, i, o, l, s, p, c, u, h) {
        return {
          Normal: { value: "Normal", fn: e },
          Effect: { value: "Effect", fn: t },
          Ritual: { value: "Ritual", fn: r },
          Fusion: { value: "Fusion", fn: n },
          Synchro: { value: "Synchro", fn: a },
          DarkSynchro: { value: "DarkSynchro", name: "Dark Synchro", fn: i },
          Xyz: { value: "Xyz", fn: l },
          Unity: { value: "Unity", fn: o },
          Link: { value: "Link", fn: s },
          Token: { value: "Token", fn: p },
          Spell: { value: "Spell", fn: c },
          Trap: { value: "Trap", fn: u },
          Skill: { value: "Skill", fn: h },
        };
      }
    ),
    i(
      "tcg/ygo/Card",
      [
        "react",
        "react-class",
        "draw/Canvas",
        "./layout/All",
        "./Attributes",
        "./Stars",
        "./Icons",
        "./Rarities",
      ],
      function (e, t, r, n, a, i, o, l) {
        var s = t({
          render: function () {
            return e.createElement(
              r,
              { width: 420, height: 610, className: "ygo card" },
              e.createElement(n[this.props.layout].fn, this.props)
            );
          },
        });
        return (
          (s.defaultProps = { layout: "Normal" }),
          (s.displayName = "Card"),
          (s.Layout = n),
          (s.Attributes = a),
          (s.Stars = i),
          (s.Icons = o),
          (s.Rarities = l),
          s
        );
      }
    ),
    (function () {
      function e(e, t, r) {
        return e.call.apply(e.bind, arguments);
      }
      function t(e, t, r) {
        if (!e) throw Error();
        if (2 < arguments.length) {
          var n = Array.prototype.slice.call(arguments, 2);
          return function () {
            var r = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(r, n), e.apply(t, r);
          };
        }
        return function () {
          return e.apply(t, arguments);
        };
      }
      function r(n, a, i) {
        return (
          (r =
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code")
              ? e
              : t),
          r.apply(null, arguments)
        );
      }
      function n(e, t) {
        (this.a = e), (this.o = t || e), (this.c = this.o.document);
      }
      function a(e, t, r, n) {
        if (((t = e.c.createElement(t)), r))
          for (var a in r)
            r.hasOwnProperty(a) &&
              ("style" == a
                ? (t.style.cssText = r[a])
                : t.setAttribute(a, r[a]));
        return n && t.appendChild(e.c.createTextNode(n)), t;
      }
      function o(e, t, r) {
        (e = e.c.getElementsByTagName(t)[0]),
          e || (e = document.documentElement),
          e.insertBefore(r, e.lastChild);
      }
      function l(e) {
        e.parentNode && e.parentNode.removeChild(e);
      }
      function s(e, t, r) {
        (t = t || []), (r = r || []);
        for (var n = e.className.split(/\s+/), a = 0; a < t.length; a += 1) {
          for (var i = !1, o = 0; o < n.length; o += 1)
            if (t[a] === n[o]) {
              i = !0;
              break;
            }
          i || n.push(t[a]);
        }
        for (t = [], a = 0; a < n.length; a += 1) {
          for (i = !1, o = 0; o < r.length; o += 1)
            if (n[a] === r[o]) {
              i = !0;
              break;
            }
          i || t.push(n[a]);
        }
        e.className = t
          .join(" ")
          .replace(/\s+/g, " ")
          .replace(/^\s+|\s+$/, "");
      }
      function p(e, t) {
        for (var r = e.className.split(/\s+/), n = 0, a = r.length; n < a; n++)
          if (r[n] == t) return !0;
        return !1;
      }
      function c(e) {
        return e.o.location.hostname || e.a.location.hostname;
      }
      function u(e, t, r) {
        function n() {
          p && i && l && (p(s), (p = null));
        }
        t = a(e, "link", { rel: "stylesheet", href: t, media: "all" });
        var i = !1,
          l = !0,
          s = null,
          p = r || null;
        re
          ? ((t.onload = function () {
              (i = !0), n();
            }),
            (t.onerror = function () {
              (i = !0), (s = Error("Stylesheet failed to load")), n();
            }))
          : setTimeout(function () {
              (i = !0), n();
            }, 0),
          o(e, "head", t);
      }
      function h(e, t, r, n) {
        var i = e.c.getElementsByTagName("head")[0];
        if (i) {
          var o = a(e, "script", { src: t }),
            l = !1;
          return (
            (o.onload = o.onreadystatechange =
              function () {
                l ||
                  (this.readyState &&
                    "loaded" != this.readyState &&
                    "complete" != this.readyState) ||
                  ((l = !0),
                  r && r(null),
                  (o.onload = o.onreadystatechange = null),
                  "HEAD" == o.parentNode.tagName && i.removeChild(o));
              }),
            i.appendChild(o),
            setTimeout(function () {
              l || ((l = !0), r && r(Error("Script load timeout")));
            }, n || 5e3),
            o
          );
        }
        return null;
      }
      function d() {
        (this.a = 0), (this.c = null);
      }
      function f(e) {
        return (
          e.a++,
          function () {
            e.a--, g(e);
          }
        );
      }
      function m(e, t) {
        (e.c = t), g(e);
      }
      function g(e) {
        0 == e.a && e.c && (e.c(), (e.c = null));
      }
      function v(e) {
        this.a = e || "-";
      }
      function y(e, t) {
        (this.c = e), (this.f = 4), (this.a = "n");
        var r = (t || "n4").match(/^([nio])([1-9])$/i);
        r && ((this.a = r[1]), (this.f = parseInt(r[2], 10)));
      }
      function w(e) {
        return k(e) + " " + e.f + "00 300px " + E(e.c);
      }
      function E(e) {
        var t = [];
        e = e.split(/,\s*/);
        for (var r = 0; r < e.length; r++) {
          var n = e[r].replace(/['"]/g, "");
          -1 != n.indexOf(" ") || /^\d/.test(n)
            ? t.push("'" + n + "'")
            : t.push(n);
        }
        return t.join(",");
      }
      function b(e) {
        return e.a + e.f;
      }
      function k(e) {
        var t = "normal";
        return "o" === e.a ? (t = "oblique") : "i" === e.a && (t = "italic"), t;
      }
      function x(e) {
        var t = 4,
          r = "n",
          n = null;
        return (
          e &&
            ((n = e.match(/(normal|oblique|italic)/i)) &&
              n[1] &&
              (r = n[1].substr(0, 1).toLowerCase()),
            (n = e.match(/([1-9]00|normal|bold)/i)) &&
              n[1] &&
              (/bold/i.test(n[1])
                ? (t = 7)
                : /[1-9]00/.test(n[1]) &&
                  (t = parseInt(n[1].substr(0, 1), 10)))),
          r + t
        );
      }
      function S(e, t) {
        (this.c = e),
          (this.f = e.o.document.documentElement),
          (this.h = t),
          (this.a = new v("-")),
          (this.j = !1 !== t.events),
          (this.g = !1 !== t.classes);
      }
      function C(e) {
        e.g && s(e.f, [e.a.c("wf", "loading")]), A(e, "loading");
      }
      function N(e) {
        if (e.g) {
          var t = p(e.f, e.a.c("wf", "active")),
            r = [],
            n = [e.a.c("wf", "loading")];
          t || r.push(e.a.c("wf", "inactive")), s(e.f, r, n);
        }
        A(e, "inactive");
      }
      function A(e, t, r) {
        e.j && e.h[t] && (r ? e.h[t](r.c, b(r)) : e.h[t]());
      }
      function T() {
        this.c = {};
      }
      function F(e, t, r) {
        var n,
          a = [];
        for (n in t)
          if (t.hasOwnProperty(n)) {
            var i = e.c[n];
            i && a.push(i(t[n], r));
          }
        return a;
      }
      function j(e, t) {
        (this.c = e),
          (this.f = t),
          (this.a = a(this.c, "span", { "aria-hidden": "true" }, this.f));
      }
      function L(e) {
        o(e.c, "body", e.a);
      }
      function I(e) {
        return (
          "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" +
          E(e.c) +
          ";font-style:" +
          k(e) +
          ";font-weight:" +
          e.f +
          "00;"
        );
      }
      function R(e, t, r, n, a, i) {
        (this.g = e),
          (this.j = t),
          (this.a = n),
          (this.c = r),
          (this.f = a || 3e3),
          (this.h = i || void 0);
      }
      function P(e, t, r, n, a, i, o) {
        (this.v = e),
          (this.B = t),
          (this.c = r),
          (this.a = n),
          (this.s = o || "BESbswy"),
          (this.f = {}),
          (this.w = a || 3e3),
          (this.u = i || null),
          (this.m = this.j = this.h = this.g = null),
          (this.g = new j(this.c, this.s)),
          (this.h = new j(this.c, this.s)),
          (this.j = new j(this.c, this.s)),
          (this.m = new j(this.c, this.s)),
          (e = new y(this.a.c + ",serif", b(this.a))),
          (e = I(e)),
          (this.g.a.style.cssText = e),
          (e = new y(this.a.c + ",sans-serif", b(this.a))),
          (e = I(e)),
          (this.h.a.style.cssText = e),
          (e = new y("serif", b(this.a))),
          (e = I(e)),
          (this.j.a.style.cssText = e),
          (e = new y("sans-serif", b(this.a))),
          (e = I(e)),
          (this.m.a.style.cssText = e),
          L(this.g),
          L(this.h),
          L(this.j),
          L(this.m);
      }
      function B() {
        if (null === ae) {
          var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
            window.navigator.userAgent
          );
          ae =
            !!e &&
            (536 > parseInt(e[1], 10) ||
              (536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10)));
        }
        return ae;
      }
      function _(e, t, r) {
        for (var n in ne)
          if (ne.hasOwnProperty(n) && t === e.f[ne[n]] && r === e.f[ne[n]])
            return !0;
        return !1;
      }
      function M(e) {
        var t,
          r = e.g.a.offsetWidth,
          n = e.h.a.offsetWidth;
        (t = r === e.f.serif && n === e.f["sans-serif"]) ||
          (t = B() && _(e, r, n)),
          t
            ? te() - e.A >= e.w
              ? B() && _(e, r, n) && (null === e.u || e.u.hasOwnProperty(e.a.c))
                ? z(e, e.v)
                : z(e, e.B)
              : D(e)
            : z(e, e.v);
      }
      function D(e) {
        setTimeout(
          r(function () {
            M(this);
          }, e),
          50
        );
      }
      function z(e, t) {
        setTimeout(
          r(function () {
            l(this.g.a), l(this.h.a), l(this.j.a), l(this.m.a), t(this.a);
          }, e),
          0
        );
      }
      function O(e, t, r) {
        (this.c = e),
          (this.a = t),
          (this.f = 0),
          (this.m = this.j = !1),
          (this.s = r);
      }
      function W(e) {
        0 == --e.f &&
          e.j &&
          (e.m
            ? ((e = e.a),
              e.g &&
                s(
                  e.f,
                  [e.a.c("wf", "active")],
                  [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]
                ),
              A(e, "active"))
            : N(e.a));
      }
      function G(e) {
        (this.j = e), (this.a = new T()), (this.h = 0), (this.f = this.g = !0);
      }
      function U(e, t, n, a, i) {
        var o = 0 == --e.h;
        (e.f || e.g) &&
          setTimeout(function () {
            var e = i || null,
              l = a || null || {};
            if (0 === n.length && o) N(t.a);
            else {
              (t.f += n.length), o && (t.j = o);
              var p,
                c = [];
              for (p = 0; p < n.length; p++) {
                var u = n[p],
                  h = l[u.c],
                  d = t.a,
                  f = u;
                if (
                  (d.g &&
                    s(d.f, [d.a.c("wf", f.c, b(f).toString(), "loading")]),
                  A(d, "fontloading", f),
                  (d = null),
                  null === ie)
                )
                  if (window.FontFace) {
                    var f = /Gecko.*Firefox\/(\d+)/.exec(
                        window.navigator.userAgent
                      ),
                      m =
                        /OS X.*Version\/10\..*Safari/.exec(
                          window.navigator.userAgent
                        ) && /Apple/.exec(window.navigator.vendor);
                    ie = f ? 42 < parseInt(f[1], 10) : !m;
                  } else ie = !1;
                (d = ie
                  ? new R(r(t.g, t), r(t.h, t), t.c, u, t.s, h)
                  : new P(r(t.g, t), r(t.h, t), t.c, u, t.s, e, h)),
                  c.push(d);
              }
              for (p = 0; p < c.length; p++) c[p].start();
            }
          }, 0);
      }
      function X(e, t, r) {
        var n = [],
          a = r.timeout;
        C(t);
        var n = F(e.a, r, e.c),
          i = new O(e.c, t, a);
        for (e.h = n.length, t = 0, r = n.length; t < r; t++)
          n[t].load(function (t, r, n) {
            U(e, i, t, r, n);
          });
      }
      function q(e, t) {
        (this.c = e), (this.a = t);
      }
      function J(e, t) {
        (this.c = e), (this.a = t);
      }
      function H(e, t) {
        (this.c = e || oe), (this.a = []), (this.f = []), (this.g = t || "");
      }
      function V(e, t) {
        for (var r = t.length, n = 0; n < r; n++) {
          var a = t[n].split(":");
          3 == a.length && e.f.push(a.pop());
          var i = "";
          2 == a.length && "" != a[1] && (i = ":"), e.a.push(a.join(i));
        }
      }
      function $(e) {
        if (0 == e.a.length) throw Error("No fonts to load!");
        if (-1 != e.c.indexOf("kit=")) return e.c;
        for (var t = e.a.length, r = [], n = 0; n < t; n++)
          r.push(e.a[n].replace(/ /g, "+"));
        return (
          (t = e.c + "?family=" + r.join("%7C")),
          0 < e.f.length && (t += "&subset=" + e.f.join(",")),
          0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)),
          t
        );
      }
      function Q(e) {
        (this.f = e), (this.a = []), (this.c = {});
      }
      function Y(e) {
        for (var t = e.f.length, r = 0; r < t; r++) {
          var n = e.f[r].split(":"),
            a = n[0].replace(/\+/g, " "),
            i = ["n4"];
          if (2 <= n.length) {
            var o,
              l = n[1];
            if (((o = []), l))
              for (var l = l.split(","), s = l.length, p = 0; p < s; p++) {
                var c;
                if (((c = l[p]), c.match(/^[\w-]+$/))) {
                  var u = ce.exec(c.toLowerCase());
                  if (null == u) c = "";
                  else {
                    if (
                      ((c = u[2]),
                      (c = null == c || "" == c ? "n" : pe[c]),
                      null == (u = u[1]) || "" == u)
                    )
                      u = "4";
                    else
                      var h = se[u],
                        u = h || (isNaN(u) ? "4" : u.substr(0, 1));
                    c = [c, u].join("");
                  }
                } else c = "";
                c && o.push(c);
              }
            0 < o.length && (i = o),
              3 == n.length &&
                ((n = n[2]),
                (o = []),
                (n = n ? n.split(",") : o),
                0 < n.length && (n = le[n[0]]) && (e.c[a] = n));
          }
          for (
            e.c[a] || ((n = le[a]) && (e.c[a] = n)), n = 0;
            n < i.length;
            n += 1
          )
            e.a.push(new y(a, i[n]));
        }
      }
      function K(e, t) {
        (this.c = e), (this.a = t);
      }
      function Z(e, t) {
        (this.c = e), (this.a = t);
      }
      function ee(e, t) {
        (this.c = e), (this.f = t), (this.a = []);
      }
      var te =
          Date.now ||
          function () {
            return +new Date();
          },
        re = !!window.FontFace;
      (v.prototype.c = function (e) {
        for (var t = [], r = 0; r < arguments.length; r++)
          t.push(arguments[r].replace(/[\W_]+/g, "").toLowerCase());
        return t.join(this.a);
      }),
        (R.prototype.start = function () {
          var e = this.c.o.document,
            t = this,
            r = te(),
            n = new Promise(function (n, a) {
              function i() {
                te() - r >= t.f
                  ? a()
                  : e.fonts.load(w(t.a), t.h).then(
                      function (e) {
                        1 <= e.length ? n() : setTimeout(i, 25);
                      },
                      function () {
                        a();
                      }
                    );
              }
              i();
            }),
            a = null,
            i = new Promise(function (e, r) {
              a = setTimeout(r, t.f);
            });
          Promise.race([i, n]).then(
            function () {
              a && (clearTimeout(a), (a = null)), t.g(t.a);
            },
            function () {
              t.j(t.a);
            }
          );
        });
      var ne = { D: "serif", C: "sans-serif" },
        ae = null;
      P.prototype.start = function () {
        (this.f.serif = this.j.a.offsetWidth),
          (this.f["sans-serif"] = this.m.a.offsetWidth),
          (this.A = te()),
          M(this);
      };
      var ie = null;
      (O.prototype.g = function (e) {
        var t = this.a;
        t.g &&
          s(
            t.f,
            [t.a.c("wf", e.c, b(e).toString(), "active")],
            [
              t.a.c("wf", e.c, b(e).toString(), "loading"),
              t.a.c("wf", e.c, b(e).toString(), "inactive"),
            ]
          ),
          A(t, "fontactive", e),
          (this.m = !0),
          W(this);
      }),
        (O.prototype.h = function (e) {
          var t = this.a;
          if (t.g) {
            var r = p(t.f, t.a.c("wf", e.c, b(e).toString(), "active")),
              n = [],
              a = [t.a.c("wf", e.c, b(e).toString(), "loading")];
            r || n.push(t.a.c("wf", e.c, b(e).toString(), "inactive")),
              s(t.f, n, a);
          }
          A(t, "fontinactive", e), W(this);
        }),
        (G.prototype.load = function (e) {
          (this.c = new n(this.j, e.context || this.j)),
            (this.g = !1 !== e.events),
            (this.f = !1 !== e.classes),
            X(this, new S(this.c, e), e);
        }),
        (q.prototype.load = function (e) {
          function t() {
            if (i["__mti_fntLst" + n]) {
              var r,
                a = i["__mti_fntLst" + n](),
                o = [];
              if (a)
                for (var l = 0; l < a.length; l++) {
                  var s = a[l].fontfamily;
                  void 0 != a[l].fontStyle && void 0 != a[l].fontWeight
                    ? ((r = a[l].fontStyle + a[l].fontWeight),
                      o.push(new y(s, r)))
                    : o.push(new y(s));
                }
              e(o);
            } else
              setTimeout(function () {
                t();
              }, 50);
          }
          var r = this,
            n = r.a.projectId,
            a = r.a.version;
          if (n) {
            var i = r.c.o;
            h(
              this.c,
              (r.a.api || "https://fast.fonts.net/jsapi") +
                "/" +
                n +
                ".js" +
                (a ? "?v=" + a : ""),
              function (a) {
                a
                  ? e([])
                  : ((i["__MonotypeConfiguration__" + n] = function () {
                      return r.a;
                    }),
                    t());
              }
            ).id = "__MonotypeAPIScript__" + n;
          } else e([]);
        }),
        (J.prototype.load = function (e) {
          var t,
            r,
            n = this.a.urls || [],
            a = this.a.families || [],
            i = this.a.testStrings || {},
            o = new d();
          for (t = 0, r = n.length; t < r; t++) u(this.c, n[t], f(o));
          var l = [];
          for (t = 0, r = a.length; t < r; t++)
            if (((n = a[t].split(":")), n[1]))
              for (var s = n[1].split(","), p = 0; p < s.length; p += 1)
                l.push(new y(n[0], s[p]));
            else l.push(new y(n[0]));
          m(o, function () {
            e(l, i);
          });
        });
      var oe = "https://fonts.googleapis.com/css",
        le = {
          latin: "BESbswy",
          "latin-ext": "çöüğş",
          cyrillic: "йяЖ",
          greek: "αβΣ",
          khmer: "កខគ",
          Hanuman: "កខគ",
        },
        se = {
          thin: "1",
          extralight: "2",
          "extra-light": "2",
          ultralight: "2",
          "ultra-light": "2",
          light: "3",
          regular: "4",
          book: "4",
          medium: "5",
          "semi-bold": "6",
          semibold: "6",
          "demi-bold": "6",
          demibold: "6",
          bold: "7",
          "extra-bold": "8",
          extrabold: "8",
          "ultra-bold": "8",
          ultrabold: "8",
          black: "9",
          heavy: "9",
          l: "3",
          r: "4",
          b: "7",
        },
        pe = { i: "i", italic: "i", n: "n", normal: "n" },
        ce =
          /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,
        ue = { Arimo: !0, Cousine: !0, Tinos: !0 };
      (K.prototype.load = function (e) {
        var t = new d(),
          r = this.c,
          n = new H(this.a.api, this.a.text),
          a = this.a.families;
        V(n, a);
        var i = new Q(a);
        Y(i),
          u(r, $(n), f(t)),
          m(t, function () {
            e(i.a, i.c, ue);
          });
      }),
        (Z.prototype.load = function (e) {
          var t = this.a.id,
            r = this.c.o;
          t
            ? h(
                this.c,
                (this.a.api || "https://use.typekit.net") + "/" + t + ".js",
                function (t) {
                  if (t) e([]);
                  else if (
                    r.Typekit &&
                    r.Typekit.config &&
                    r.Typekit.config.fn
                  ) {
                    t = r.Typekit.config.fn;
                    for (var n = [], a = 0; a < t.length; a += 2)
                      for (var i = t[a], o = t[a + 1], l = 0; l < o.length; l++)
                        n.push(new y(i, o[l]));
                    try {
                      r.Typekit.load({ events: !1, classes: !1, async: !0 });
                    } catch (e) {}
                    e(n);
                  }
                },
                2e3
              )
            : e([]);
        }),
        (ee.prototype.load = function (e) {
          var t = this.f.id,
            r = this.c.o,
            n = this;
          t
            ? (r.__webfontfontdeckmodule__ ||
                (r.__webfontfontdeckmodule__ = {}),
              (r.__webfontfontdeckmodule__[t] = function (t, r) {
                for (var a = 0, i = r.fonts.length; a < i; ++a) {
                  var o = r.fonts[a];
                  n.a.push(
                    new y(
                      o.name,
                      x("font-weight:" + o.weight + ";font-style:" + o.style)
                    )
                  );
                }
                e(n.a);
              }),
              h(
                this.c,
                (this.f.api || "https://f.fontdeck.com/s/css/js/") +
                  c(this.c) +
                  "/" +
                  t +
                  ".js",
                function (t) {
                  t && e([]);
                }
              ))
            : e([]);
        });
      var he = new G(window);
      (he.a.c.custom = function (e, t) {
        return new J(t, e);
      }),
        (he.a.c.fontdeck = function (e, t) {
          return new ee(t, e);
        }),
        (he.a.c.monotype = function (e, t) {
          return new q(t, e);
        }),
        (he.a.c.typekit = function (e, t) {
          return new Z(t, e);
        }),
        (he.a.c.google = function (e, t) {
          return new K(t, e);
        });
      var de = { load: r(he.load, he) };
      "function" == typeof i && i.amd
        ? i("webfont", [], function () {
            return de;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = de)
        : ((window.WebFont = de),
          window.WebFontConfig && he.load(window.WebFontConfig));
    })(),
    i("tcg/ygo/Checkbox", ["react", "react-class"], function (e, t) {
      return function (t) {
        return e.createElement(
          "span",
          { className: "ipsCustomInput" },
          e.createElement("input", {
            id: t.id,
            onChange: t.onChange,
            type: "checkbox",
            checked: t.checked,
          }),
          e.createElement("span", {})
        );
      };
    }),
    i(
      "tcg/ygo/CardMaker",
      ["react", "react-class", "./Card", "webfont", "./Checkbox"],
      function (e, t, r, n, a) {
        var i = {
          version: "1.2.0",
          rarity: "Common",
          name: "",
          level: 0,
          type: "",
          effect: "",
          atk: "",
          def: "",
          serial: "This card cannot be used in a Duel.",
          copyright: "© 1993 YEMACHU",
          id: "",
          attribute: "None",
          pendulum: { enabled: !1, effect: "", blue: "5", red: "5" },
          link: {
            topLeft: !1,
            topCenter: !1,
            topRight: !1,
            middleLeft: !1,
            middleRight: !1,
            bottomLeft: !1,
            bottomCenter: !1,
            bottomRight: !1,
          },
          layout: "Normal",
        };
        return t({
          getInitialState: function () {
            window.addEventListener(
              "beforeunload",
              function (e) {
                localStorage.setItem("ccms", JSON.stringify(this.state));
              }.bind(this)
            );
            var e = JSON.parse(localStorage.getItem("ccms"));
            console.log(e);
            var t = {
              card: {
                version: "1.0.0",
                name: "Neo New Card Maker",
                level: 4,
                type: "Cyberse / Pendulum",
                icon: "None",
                effect:
                  "A card maker that supports the creation of Normal, Effect, Ritual, Fusion, Synchro, Dark Synchro, Xyz and Link monsters. It also provides support for creating Pendulum versions of some card types.",
                atk: "0",
                def: "0",
                serial: "This card cannot be used in a Duel.",
                copyright: "© 1993 YEMACHU",
                attribute: "None",
                id: "YCM - EN000",
                pendulum: { enabled: !0, effect: "", blue: "5", red: "5" },
                link: {
                  topLeft: !1,
                  topCenter: !1,
                  topRight: !1,
                  middleLeft: !1,
                  middleRight: !1,
                  bottomLeft: !1,
                  bottomCenter: !1,
                  bottomRight: !1,
                },
                layout: "Normal",
              },
            };
            return (
              n.load({
                google: {
                  families: [
                    "Buenard",
                    "Spectral SC:semi-bold,extra-bold",
                    "Spectral",
                    "Amiri:italic",
                    "Audiowide",
                    "Crimson Text:semi-bold,bold",
                    "Heebo:medium",
                  ],
                },
                fontactive: function () {
                  this.forceUpdate();
                }.bind(this),
              }),
              Object.assign({}, t, e)
            );
          },
          render: function () {
            function t(t) {
              var r = [];
              for (var n in t)
                t.hasOwnProperty(n) &&
                  ((element = t[n] || {}),
                  (r[r.length] = e.createElement(
                    "option",
                    {
                      key: n,
                      value: void 0 !== element.value ? element.value : n,
                    },
                    element.name || n
                  )));
              return r;
            }
            var n = t(r.Layout),
              i = t(r.Attributes),
              o = t(r.Icons),
              l = t(r.Rarities),
              s = e.createElement;
            return s(
              "div",
              { className: "cardmaker ygo" },
              s("div", { className: "live-preview" }, s(r, this.state.card)),
              s(
                "div",
                { className: "editor" },
                s(
                  "button",
                  {
                    onClick: this.create,
                    className: "ipsButton ipsButton_primary",
                  },
                  "New"
                ),
                s(
                  "button",
                  {
                    onClick: this.save,
                    className: "ipsButton ipsButton_primary",
                  },
                  "Save"
                ),
                s(
                  "button",
                  {
                    onClick: this.open,
                    className: "ipsButton ipsButton_primary",
                  },
                  "Open"
                ),
                s(
                  "label",
                  null,
                  "Name",
                  s("input", {
                    onChange: this.updateField("card.name"),
                    type: "text",
                    value: this.state.card.name,
                  })
                ),
                s(
                  "label",
                  null,
                  "Rarity",
                  s(
                    "select",
                    {
                      onChange: this.updateField("card.rarity"),
                      value: this.state.card.rarity,
                    },
                    l
                  )
                ),
                s(
                  "label",
                  null,
                  "Template",
                  s(
                    "select",
                    {
                      onChange: this.updateField("card.layout"),
                      value: this.state.card.layout,
                    },
                    n
                  )
                ),
                s(
                  "label",
                  null,
                  "Attribute",
                  s(
                    "select",
                    {
                      onChange: this.updateField("card.attribute"),
                      value: this.state.card.attribute,
                    },
                    i
                  )
                ),
                s(
                  "label",
                  null,
                  "Level",
                  s("input", {
                    onChange: this.updateField("card.level"),
                    type: "number",
                    value: this.state.card.level,
                  })
                ),
                s(
                  "label",
                  null,
                  "Image",
                  s("input", {
                    onChange: this.updateField("card.image"),
                    type: "text",
                  }),
                  s("input", {
                    onChange: this.updateCardImage("image"),
                    type: "file",
                  })
                ),
                s(
                  "label",
                  null,
                  "Type",
                  s("input", {
                    onChange: this.updateField("card.type"),
                    type: "text",
                    value: this.state.card.type,
                  })
                ),
                s(
                  "label",
                  null,
                  "Icon",
                  s(
                    "select",
                    {
                      onChange: this.updateField("card.icon"),
                      value: this.state.card.icon,
                    },
                    o
                  )
                ),
                s(
                  "label",
                  null,
                  "Effect",
                  s("textarea", {
                    onChange: this.updateField("card.effect"),
                    value: this.state.card.effect,
                  })
                ),
                s(
                  "label",
                  null,
                  "Attack",
                  s("input", {
                    onChange: this.updateField("card.atk"),
                    type: "text",
                    value: this.state.card.atk,
                  })
                ),
                s(
                  "label",
                  null,
                  "Defense and/or Link",
                  s("input", {
                    onChange: this.updateField("card.def"),
                    type: "text",
                    value: this.state.card.def,
                  })
                ),
                s(
                  "label",
                  null,
                  "Set id",
                  s("input", {
                    onChange: this.updateField("card.id"),
                    type: "text",
                    value: this.state.card.id,
                  })
                ),
                s(
                  "label",
                  null,
                  "Serial number",
                  s("input", {
                    onChange: this.updateField("card.serial"),
                    type: "text",
                    value: this.state.card.serial,
                  })
                ),
                s(
                  "button",
                  {
                    onClick: this.randomizeSerialNumber,
                    className: "ipsButton ipsButton_primary",
                  },
                  "Randomize"
                ),
                s(
                  "label",
                  null,
                  "Copyright",
                  s("input", {
                    onChange: this.updateField("card.copyright"),
                    type: "text",
                    value: this.state.card.copyright,
                  })
                ),
                s(
                  "fieldset",
                  null,
                  s(
                    "legend",
                    null,
                    s(a, {
                      id: "ccm_ygo:pendulum.enabled",
                      onChange: function (e) {
                        this.updateField("card.pendulum.enabled")({
                          target: { value: e.target.checked },
                        });
                      }.bind(this),
                      type: "checkbox",
                      checked: this.state.card.pendulum.enabled,
                    }),
                    s(
                      "label",
                      { htmlFor: "ccm_ygo:pendulum.enabled" },
                      "Pendulum"
                    )
                  ),
                  s(
                    "label",
                    null,
                    "Blue scale",
                    s("input", {
                      onChange: this.updateField("card.pendulum.blue"),
                      type: "text",
                      value: this.state.card.pendulum.blue,
                    })
                  ),
                  s(
                    "label",
                    null,
                    "Red scale",
                    s("input", {
                      onChange: this.updateField("card.pendulum.red"),
                      type: "text",
                      value: this.state.card.pendulum.red,
                    })
                  ),
                  s(
                    "label",
                    null,
                    "Effect",
                    s("textarea", {
                      onChange: this.updateField("card.pendulum.effect"),
                      type: "text",
                      value: this.state.card.pendulum.effect,
                    })
                  )
                ),
                s(
                  "fieldset",
                  null,
                  s("legend", null, s("label", {}, "Link")),
                  s(
                    "table",
                    null,
                    s(
                      "tbody",
                      null,
                      s(
                        "tr",
                        null,
                        s(
                          "td",
                          null,
                          s(a, {
                            id: "ccm_ygo:link.topLeft",
                            onChange: function (e) {
                              this.updateField("card.link.topLeft")({
                                target: { value: e.target.checked },
                              });
                            }.bind(this),
                            checked: this.state.card.link.topLeft,
                          }),
                          s("label", { htmlFor: "ccm_ygo:link.topLeft" }, "")
                        ),
                        s(
                          "td",
                          null,
                          s(a, {
                            id: "ccm_ygo:link.topCenter",
                            onChange: function (e) {
                              this.updateField("card.link.topCenter")({
                                target: { value: e.target.checked },
                              });
                            }.bind(this),
                            checked: this.state.card.link.topCenter,
                          }),
                          s("label", { htmlFor: "ccm_ygo:link.topCenter" }, "")
                        ),
                        s(
                          "td",
                          null,
                          s(a, {
                            id: "ccm_ygo:link.topRight",
                            onChange: function (e) {
                              this.updateField("card.link.topRight")({
                                target: { value: e.target.checked },
                              });
                            }.bind(this),
                            checked: this.state.card.link.topRight,
                          }),
                          s("label", { htmlFor: "ccm_ygo:link.topRight" }, "")
                        )
                      ),
                      s(
                        "tr",
                        null,
                        s(
                          "td",
                          null,
                          s(a, {
                            id: "ccm_ygo:link.middleLeft",
                            onChange: function (e) {
                              this.updateField("card.link.middleLeft")({
                                target: { value: e.target.checked },
                              });
                            }.bind(this),
                            checked: this.state.card.link.middleLeft,
                          }),
                          s("label", { htmlFor: "ccm_ygo:link.middleLeft" }, "")
                        ),
                        s("td"),
                        s(
                          "td",
                          null,
                          s(a, {
                            id: "ccm_ygo:link.middleRight",
                            onChange: function (e) {
                              this.updateField("card.link.middleRight")({
                                target: { value: e.target.checked },
                              });
                            }.bind(this),
                            checked: this.state.card.link.middleRight,
                          }),
                          s(
                            "label",
                            { htmlFor: "ccm_ygo:link.middleRight" },
                            ""
                          )
                        )
                      ),
                      s(
                        "tr",
                        null,
                        s(
                          "td",
                          null,
                          s(a, {
                            id: "ccm_ygo:link.bottomLeft",
                            onChange: function (e) {
                              this.updateField("card.link.bottomLeft")({
                                target: { value: e.target.checked },
                              });
                            }.bind(this),
                            checked: this.state.card.link.bottomLeft,
                          }),
                          s("label", { htmlFor: "ccm_ygo:link.bottomLeft" }, "")
                        ),
                        s(
                          "td",
                          null,
                          s(a, {
                            id: "ccm_ygo:link.bottomCenter",
                            onChange: function (e) {
                              this.updateField("card.link.bottomCenter")({
                                target: { value: e.target.checked },
                              });
                            }.bind(this),
                            checked: this.state.card.link.bottomCenter,
                          }),
                          s(
                            "label",
                            { htmlFor: "ccm_ygo:link.bottomCenter" },
                            ""
                          )
                        ),
                        s(
                          "td",
                          null,
                          s(a, {
                            id: "ccm_ygo:link.bottomRight",
                            onChange: function (e) {
                              this.updateField("card.link.bottomRight")({
                                target: { value: e.target.checked },
                              });
                            }.bind(this),
                            checked: this.state.card.link.bottomRight,
                          }),
                          s(
                            "label",
                            { htmlFor: "ccm_ygo:link.bottomRight" },
                            ""
                          )
                        )
                      )
                    )
                  )
                ),
                s("pre", { className: "special" }, "∞\n", "☆\n", "●\n")
              )
            );
          },
          create: function () {
            this.setState({ card: i });
          },
          save: function () {
            var e = document.createElement("a");
            if (
              (e.setAttribute(
                "href",
                "data:/text/plain;charset=utf-8," +
                  encodeURIComponent(JSON.stringify(this.state.card))
              ),
              e.setAttribute(
                "download",
                (this.state.card.name || "Card") + ".json"
              ),
              document.createEvent)
            ) {
              var t = document.createEvent("MouseEvent");
              t.initEvent("click", !0, !0), e.dispatchEvent(t);
            } else e.click();
          },
          open: function () {
            var e = document.createElement("input");
            if (
              (e.setAttribute("type", "file"),
              e.setAttribute("accept", ".json"),
              e.addEventListener(
                "change",
                function (e) {
                  var t = e.target.files;
                  if (FileReader && t.length) {
                    var r = new FileReader();
                    (r.onload = function () {
                      try {
                        var e = JSON.parse(r.result);
                        console.log(e), this.setState({ card: e });
                      } catch (e) {
                        console.error(e);
                      }
                    }.bind(this)),
                      r.readAsText(t[0]);
                  }
                }.bind(this)
              ),
              document.createEvent)
            ) {
              var t = document.createEvent("MouseEvent");
              t.initEvent("click", !0, !0), e.dispatchEvent(t);
            } else link.click();
          },
          updateField: function (e) {
            var t = e.split(".");
            return function (e) {
              for (var r = [], n = this.state, a = 0; a < t.length; ++a)
                (r[r.length] = { node: n, name: t[a] }), (n = n[t[a]]);
              r.reverse();
              var i = r.reduce(function (e, t) {
                var r = {};
                return (r[t.name] = e), Object.assign({}, t.node, r);
              }, e.target.value);
              this.setState(i);
            }.bind(this);
          },
          updateTemplate: function (e) {
            this.setState({
              card: Object.assign({}, this.state.card, {
                layout: r.Layout[e.target.value],
              }),
            });
          },
          updateCardImage: function (e) {
            return function (t) {
              var r = t.target.files;
              if (FileReader && r && r.length) {
                var n = new FileReader();
                (n.onload = function () {
                  var t = {};
                  (t[e] = n.result),
                    this.setState({
                      card: Object.assign({}, this.state.card, t),
                    });
                }.bind(this)),
                  n.readAsDataURL(r[0]);
              }
            }.bind(this);
          },
          randomizeSerialNumber: function () {
            var e = "0000000000" + (1e10 * Math.random()).toFixed(0);
            console.log(typeof e),
              this.updateField("card.serial")({
                target: { value: e.substring(e.length - 10) },
              });
          },
        });
      }
    ),
    i("App", ["react", "react-class", "tcg/ygo/CardMaker"], function (e, t, r) {
      return t({
        render: function () {
          return e.createElement(r, null);
        },
      });
    }),
    (function () {
      var e = document.getElementById("react-root");
      (e.innerText = "Loading"),
        (n.onError = function (t) {
          e.innerText = "Loading failed";
        }),
        a(["react", "react-dom", "App"], function (t, r, n) {
          r.render(t.createElement(n), e);
        });
    })(),
    i("main", function () {}),
    i("react", [], function () {
      return e;
    }),
    i("react-dom", [], function () {
      return t;
    }),
    i("react-class", [], function () {
      return r;
    }),
    a("main")
  );
});
